let rawInput = "";
let list;
let input = "";

function main() {
    rawInput = document.getElementById("input").value;
	list = document.getElementById("list");
    input = rawInput.replace(/(?:\r\n|\r|\n)/g, '');
    
    /** TODO:
     * new Set -> key: characters _ value: save count of every character (use regex/split to count?)
     * display percentage of every character
     * sort chars by percentage and map them onto the german percentage list
     * make and display changeable linkings 
     */
}
