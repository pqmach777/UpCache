const sendToAlbum = (albumImage) =>{
    return {
        type: "albumImage",
        albumImage: albumImage 
    }
}
export default sendToAlbum;