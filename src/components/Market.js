import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { Grid } from "@material-ui/core";

const loginButtonUrl = 'https://auth.ebay.com/oauth2/authorize?client_id=PhongMac-imgrecec-PRD-816e08212-d0316206&response_type=code&redirect_uri=Phong_Mach-PhongMac-imgrec-sjwukcldx&scope=https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly'

const styles = {
	backgroundImage: `url(${loginButtonUrl})`
}
class Market extends React.Component {
    constructor(props) {
        super(props);
        this.handleDisplayMarketSearch = this.handleDisplayMarketSearch.bind(this)
    }
    handleDisplayMarketSearch(){
        

        // const appID = "PhongMac-imgrecec-PRD-816e08212-d0316206";
        fetch("https://api.ebay.com/commerce/catalog/v1_beta/product_summary/search?q=dog", {
            headers: {
                Authorization: "Bearer v^1.1#i^1#p^3#I^3#f^0#r^0#t^H4sIAAAAAAAAAOVYW2wUVRju9kpBQBEF26YuA0Zus3vOXHZnRnZ16UVWaLt2y8W2pjk7c6YdOjuzzMy2XSJSGqmGoCaSUJqINHgJvKiNIYJWSKCJivGFBHwyJkYMRuIlRlEx4sz2wrYo0JaHTdyXzfznv33f//8n5xzQXVi8sndd75W5rqLcgW7QnetywTmguLBg1by83JKCHJCh4BroXtad35N3aY2J4mpCqMdmQtdM7O6Kq5oppIUBImlogo5MxRQ0FMemYIlCNFSzQaA8QEgYuqWLukq4w5UBQpSYmIR9mGFoCfC0aEu1MZ8NeoCQKQRkjDAvMzEmRgN73TSTOKyZFtKsAEEByJOAIil/A4QCxQiQ9UDW10i4N2HDVHTNVvEAIphOV0jbGhm53jxVZJrYsGwnRDAcqo7WhcKVVbUNa7wZvoKjPEQtZCXNiV8VuoTdm5CaxDcPY6a1hWhSFLFpEt7gSISJToXQWDLTSD9NtYw5SfbJmGapGMNw0h2hslo34si6eR6ORJFIOa0qYM1SrNStGLXZiG3FojX6VWu7CFe6nb8nk0hVZAUbAaJqbeipjdGqesIdjUQMvUORsOQghTzF0QzLQ54IJtriqMXvZ7jRICOeRimeFKVC1yTFIcx01+rWWmxnjCfzAjN4sZXqtDojJFtONpl69Dh/sNEp6EgFk1ab5tQUx20S3OnPW7M/1g7XG+BONQQvShSL5JhfBiwAEvuvDeHM+hSbIujUJRSJeJ1ccAylyDgy2rGVUJGISdGmNxnHhiIJNCtTNCdjUvLxMsnwskzGWMlHQhljgHEsJvLc/6U3LMtQYkkLj/fH5IU0wADh8CkoSBYsvR1rDakEJiZrprec0aboMgNEm2UlBK+3s7PT00l7dKPVSwEAvVtqNkTFNhxHxLiucmtlUkm3h4htK1MRLDuBANFld58dXGslgvVV1fVV0XUtDXXrq2rHOndCZsHJ0v9AGhX1BI7oqiKmsgsibUgRZFipKFZVWzAjkKYDMlvgObM+AtHxYdpOUELxOB3nEfW4V0f2juWIWtJZu29HyWvaJHlG5t/27DEwknRNTU3HeAo2itZhj5BupKYTcNx4CjZIFPWkZk0n3KjpFCzkpCorqursEtMJmGE+lTQ1pKYsRTTHQ86o8UOJRDgeT1oopuKwlC0TMDrgHMMBesbwsgxVpE3XWmuQSCrxVgM7sy5ikYzUV5Ic9GHAUZAiJUBDHwV8M8Je06pkGXTo80PgAxTwA8DNCFsl7si2uiIWM6yPoUiZ4gFpX5NokmdjiAQyFBmek2mJZWeEuUJV7K0i+44a63TTwtLMoNnn4ewC5czj2Djyko8i+RhC9tmYo0nEc4DkKXTb1RwT5NM3Hi5vuFN4J17ogznpH+xxHQM9rsFclwt4wUNwKVhSmLcxP++uElOxsMc+iHpMpVWz76kG9rTjVAIpRm6hq6ns3aMtGU8IA0+DxeOPCMV5cE7GiwIou75SAOcvmgt5QFF+CCkGso1g6fXVfHh//sIv550uKbo2XBoZ+rkZ7vv1pRUXxLVg7riSy1WQk9/jytk3dD5wzji0b9C16Mxbh7dXPNOx8I9LT+wZaHpB/vPM2XuVL04lh8tfWXP1+yJ/vj/eu+Cdb45vmx3oP9C+4uPN0ldn9xTN+k0vO2oEypfJxe+9uH91acngeffw/t2vNnO/w8vNJ65+tEL+4Y2Kh6k8pdKX3NWy98HL4d3bv3676dTxH9fL5f6dJ5bVVR+8+Min2+75q2T2J4Nt115v2jlr1cCiB/5+dn/XgpUX6PLTB+DQ+xo4svhC/2OvbSnlLrJ3t56/umNrYvl9j7/sL/7285/6+3/57mRfY8fQkfoOsOugvPlo57nnpGNXTj7fNytv/uG+th17Hz30Yemc5r4itvDN+rLln62eHyKHl3wwSI2U7x8935Y+3BEAAA=="
            }
        })
        .then(res => res.json())
        .then(product => {
            console.log(product)
            return product
        })
    }

    render() {
        return (
            <div>
                <div style={styles}>
                <button onClick={this.handleDisplayMarketSearch}>push me</button>
                </div>
                <Grid container spacing={0} className="storeProduct">
                    <Grid item xs={12}>
                        Title
                    </Grid>
                    <Grid item xs={12}>
                        Image
                    </Grid>
                    <Grid item xs={4}>
                        Price
                    </Grid>
                    <Grid item xs={8}>
                        Description
                    </Grid>
                </Grid>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         label: state.label,
//     };
// }


Market.propTypes = {
    
};

export default Market
