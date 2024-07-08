/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();

    for (let i = 0, j = -1; i < Math.floor(x.length / 2); i++, j--) {
    if (x.at(i) !== x.at(j)) return false;
    }
    return true;

};