var listEle, inputEle;
var tstTxt = [
    "MVLVSCNKAVNALHVLDVYJVCVOBLÜMVLTSCCPBYWWVZVSTVL",
    "MECNKZAICVYVSYHVLNKZPÜNNVPBYWNHVLIAZLVYJANMSNZVBCY",
    "HVLDVYJBYWISYJVCAMVLPVSKZCOBUYAKUVYSNCVLVLNVCOCVVSYIAKZ",
    "XVJVYMBKZNCAMVYJBLKZVSYVYAYJVLVYJVLSTAPRZAMVCJLVS",
    "RENSCSEYVYDVSCVLZSYCVYNCVZCSNCTAYATVYJVJVNAPRZAMVCN",
    "AYWVUETTVYMVWSYYCTAYDSVJVLHEYHELYJSVJVKEJSVLBYWSNCJAMVS",
    "APPVLJSYWNWVYABNEVSYIAKZDSVJSVKEJSVLBYWNVPMNCWPVSKZV",
    "MBKZNCAMVYDVLJVYSTTVLWPVSKZHVLNKZPÜNNVPC"
]

function init() {
    listEle = document.getElementById("list");
    inputEle = document.getElementById("input");
}

function tst() {
    let rawInput = inputEle.value = tstTxt.join("\n");
    var input = rawInput.trim().replace(/(?:\r\n|\r|\n)/g, ' ');
    var charMap = countCharsCalcPercentages(input);
    var accuracy = calcAccuracy(charMap);
    console.log(charMap);
    console.log(accuracy);
}

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

function countCharsCalcPercentages(str = "") {
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

function calcAccuracy(map = new Map()) {
    let result = 0;
    for(o of map.values()) {
        let p = o.percentage;
        result += p;
    }
    return result;
}