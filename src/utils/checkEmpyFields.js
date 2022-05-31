module.exports = function checkEmptyFields(name, value, operator) {
    let isName = name == '' || name == null || name == undefined;
    let isValue = value == '' || value == null || value == undefined;
    let isOperator = operator == '' || operator == null || operator == undefined;

    if(isName || isValue || isOperator) {
        return true;
    } else {
        return false;
    }
}