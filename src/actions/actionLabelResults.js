const actionLabelResults = (image, labels) => {
    console.log(labels)
    return {
        type: "labelResults",
        image: image,
        labels: labels
    };
};

export default actionLabelResults;