const actionLabelResults = (image, labels) => {
    return {
        type: "labelResults",
        image: image,
        labels: labels
    };
};

export default actionLabelResults;