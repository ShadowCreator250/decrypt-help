/** The textarea input element. Is written with {@link init}
 * @type {HTMLElement}
 */
var inputEle;

/** That's the encrypted text my teacher gave me in 11th grade; The "Ü"s are not encrypted.
 * @type {string}
*/
const tstTxt = [
    "MVLVSCNKAVNALHVLDVYJVCVOBLÜMVLTSCCPBYWWVZVSTVL",
    "MECNKZAICVYVSYHVLNKZPÜNNVPBYWNHVLIAZLVYJANMSNZVBCY",
    "HVLDVYJBYWISYJVCAMVLPVSKZCOBUYAKUVYSNCVLVLNVCOCVVSYIAKZ",
    "XVJVYMBKZNCAMVYJBLKZVSYVYAYJVLVYJVLSTAPRZAMVCJLVS",
    "RENSCSEYVYDVSCVLZSYCVYNCVZCSNCTAYATVYJVJVNAPRZAMVCN",
    "AYWVUETTVYMVWSYYCTAYDSVJVLHEYHELYJSVJVKEJSVLBYWSNCJAMVS",
    "APPVLJSYWNWVYABNEVSYIAKZDSVJSVKEJSVLBYWNVPMNCWPVSKZV",
    "MBKZNCAMVYDVLJVYSTTVLWPVSKZHVLNKZPÜNNVPC"
].join("\n");

/** Is called with body.onload();
 */
function init() {
    listEle = document.getElementById("list");
    inputEle = document.getElementById("input");
}

/** For testing purposes. Inserts the testing text into the input and computes it.
 */
function tst() {
    let rawInput = inputEle.value = tstTxt;
    var input = rawInput.trim().replace(/(?:\r\n|\r|\n)/g, ' ');
    var charMap = countCharsCalcPercentages(input);
    var accuracy = calcAccuracy(charMap);
    console.log(charMap);
    console.log(accuracy);
}

/** Is called on submit.
 */
function main() {
    var rawInput = document.getElementById("input").value;
    var input = rawInput.trim().replace(/(?:\r\n|\r|\n)/g, ' ');

    /** TODO:
     * new Map -> key: characters _ value: save count of every character (use regex/split to count?)
     * display percentage of every character
     * sort chars by percentage and map them onto the german percentage list
     * make and display changeable linkings 
     */
    var charMap = countCharsCalcPercentages(input);
    var accuracy = calcAccuracy(charMap);
    console.log(charMap);
    console.log(accuracy);
}

/**
 * Computes the count and percentage of every character.
 * @param {string} str The text as a one-line string that will be computed.
 * @return {Map<string,object>} A Map containing the characters as keys and an object containing the count and percentage of that character.
 */
function countCharsCalcPercentages(str) {
    var len = str.replace(/ /g, "").length;
    console.log(len);
    let map = new Map();
    
    while(str.replace(/ /g, "").length > 0) {
        while(str.substr(0, 1) == " ") {
            str = str.substr(1, str.length);
        }
        let c = str.substr(0, 1);
        let charCount = str.split(new RegExp(c, "gi")).length-1;
        let p = 100/len*charCount;
        str = str.replace(new RegExp(c, "gi"), '');
        let obj = {
            count: charCount,
            percentage: p
        }
        map.set(c, obj);
    }
    return map;
}
/**
 * Calcuates the accuracy of the percentages by summing up all individual percentages. This can show potential errors.
 * @param {Map<string, object>} map A Map containing the characters as keys and an object containing the count and percentage of that character.
 * @return {number} The accuracy.
 */
function calcAccuracy(map = new Map()) {
    let result = 0;
    for(o of map.values()) {
        let p = o.percentage;
        result += p;
    }
    return result;
}