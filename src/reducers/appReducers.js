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
                image: {
                    type: action.image.type,
                    link: action.image.link
                },
                labels: action.labels,
            };
        default:
            return state;
    }     
}

export default appReducers;