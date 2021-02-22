module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map(item => item.join(""));
    while (brackets.some(el => str.includes(el))) {
        brackets.forEach(el => (str = str.replace(el, "")));
    }
    return !str;
};
