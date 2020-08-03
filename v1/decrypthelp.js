function countLetters() {
	console.clear();
	let alphabet = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Ä","Ö","Ü","ß");
	let letterCount = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,);
	let tstArr = new Array();
	let rawInput = document.getElementById("input").value;
	let list = document.getElementById("list");
	let input = rawInput.replace(/(?:\r\n|\r|\n)/g, '');
	input = input.replace(/\s+/g, '');
	tstArr.push(input);
	console.log(tstArr);
	let inputArr = input.split("");
	for (let i = 0; i<inputArr.length; i++) {
		if (inputArr[i] != "ß") {
			inputArr[i] = inputArr[i].toUpperCase();
		}

	}
	for (let i = 0; i<inputArr.length; i++) {
		for (let j = 0; j<alphabet.length; j++) {
			if (inputArr[i] == alphabet[j]) {
				letterCount[j] += 1;
			}
		}

	}
	console.log(letterCount);

	let percentage = new Array();
	let textLength = input.length;
	let p = 0;
	for (let i = 0; i<alphabet.length; i++) {
		percentage[i] = (100/textLength*letterCount[i]);
		p += percentage[i];
		let li_elem = document.createElement("li", id="list-elem");
    	li_elem.innerHTML = alphabet[i] + " : " + percentage[i] + " %   (" + letterCount[i] + "/" + textLength + ")";
		list.appendChild(li_elem);
		
	}
	let li_elem = document.createElement("li", id="list-elem");
    	li_elem.innerHTML = "Genauigkeit der Prozentangaben: " + p + " %   ( Wieder alle Prozentangaben zusammengerechnet. )";
		list.appendChild(li_elem);
		
	console.log(percentage);
	console.log(p);


}
