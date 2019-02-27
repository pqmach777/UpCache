function appReducers (state, action) {
    if (state === undefined){
        return {
            image: {
                type: "",
                link: ""
            },
            labels:[]
        }
    }
    switch (action.type) {
        case "labelResults":
            return {
                ...state,
                image: {
                    type: action.image.type,
                    link: action.image.link
                },
                labels: action.labels,
            };
        case "findLabel":
            return{
                ...state,
                label: action.label
            };
        case "sendToAlbum":
            return{
                ...state,
                image: {
                    type: action.image.type,
                    link: action.image.link
                }
            }
        default:
            return state;
    }     
}

export default appReducers;