module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map(e => e.join(""));
    while (brackets.some(e => str.includes(e))) {
        brackets.map(e => str = str.replace(e, ""));
    }
    return !str;
};
