module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map((item) => item.join(""));
    while (brackets.some((el) => str.includes(el))) {
        brackets.forEach((el) => (str = str.replace(el, "")));
    }
    return !str;
};

// // ////#region
//  module.exports = function check(str, bracketsConfig) {
//     const brackets = bracketsConfig.flatMap((item) => item.join(""));

//     for (let index = 0; index < brackets.length; index++) {
//         if (str.includes(brackets[index])) {
//             str = str.replace(brackets[index], "");
//             index = -1;
//         }
//     }

//     return str === "";
// };
