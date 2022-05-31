module.exports = function concatenateOperator(operator, value) {
    value = Math.abs(value);
    if(operator == '+') {
        value = `+${value}`;
    } else if(operator == '-') {
        value = `-${value}`;
    }
    return value = Number(value.trim());
}