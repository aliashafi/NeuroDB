// validation for checking length of input

const validText = (str) => {
    // .trim() removes spaces
    return typeof str === "string" && str.trim().length > 0;
}

module.exports = validText;