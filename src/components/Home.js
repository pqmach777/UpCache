import React, { Component } from 'react';
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import './App.css';
import { logout } from '../helpers/auth';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';


const appTokenKey = "appToken";
export default class Home extends Component {
constructor(props) {
    super(props);
    const allPhotos = [
        {
            id: 'randomstringimadeup43454356546',
            url: 'http://fillmurray.com/200/200'
        },
        {
            id: 'randomstringimadeup43523526534565',
            url: 'http://fillmurray.com/200/200'
        },
        {
            id: 'randomstringimadeup433245234534',
            url: 'http://fillmurray.com/200/200'
        }                  
    ]
        this.state = {
            allPhotos
        };
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        logout()
        .then(() => {
            localStorage.removeItem(appTokenKey);
            this.props.history.push("/login");
            console.log("user signed out from firebase");            
        });
    }
    async handleUploadSuccess (filename) {

        try {
            let { bucket, fullPath } = await firebase.storage().ref('images').child(filename).getMetadata();
            console.log('bucket', bucket)
            console.log('fullPath', fullPath)
            let downloadURL = await firebase.storage().ref('images').child(filename).getDownloadURL();
            console.log('downloadURL', downloadURL)
    
            let { uid, email, displayName } = await firebase.auth().currentUser;
    
            let newPhoto = {
                url: downloadURL,
                userName: displayName,
                userId: uid,
                email,
                bucket,
                fullPath
            }
            console.log('newPhoto', newPhoto);
    
            await firebase.firestore().collection('photos').add(newPhoto);
        } 
    
        catch(err) {
            console.error(err);
        }
    }
    render() {
        const allImages = this.state.allPhotos.map(photo => {
            return (
                <div key={photo.id}>
                    <div style={{minHeight: '215px'}}>
                        <i className="bottom-icon material-icons main-close">close</i>
                        <image style={{ width: '100%' }} alt="images" src={photo.url} />
                    </div>
                </div>
            );
        })
        return (
            <div>
                {allImages}

                <Grid container spacing={0} className="bottom-nav">
                    <Grid container className="show-grid" direction="row">
                        <Grid item xs={4} className="col-bottom">
                            <Link to="/app/album"><i className="bottom-icon material-icons">collections</i></Link>
                        </Grid>
                        <Grid item xs={4} className="col-bottom">
                        <label>
                            <i className="bottom-icon material-icons">camera_alt</i>
                            <FileUploader
                                hidden
                                accept="image/*"
                                storageRef={firebase.storage().ref('images')}
                                onUploadStart={this.handleUploadStart}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                                onProgress={this.handleProgress}
                            />
                        </label>
                        </Grid>
                        <Grid item xs={4} onClick={this.handleLogout} className="col-bottom">
                            <i className="bottom-icon material-icons">assignment_return</i>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

