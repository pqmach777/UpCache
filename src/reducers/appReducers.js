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
                labels: action.labels
            };
        }


}