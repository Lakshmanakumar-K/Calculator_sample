let box = document.createElement("div");
document.body.append(box);
box.className ="box";

let container = document.createElement("div");
box.append(container);
container.classList.add("container");
container.classList.add("mycontainer");

let calcouterbox = document.createElement("div");
container.append(calcouterbox);
calcouterbox.classList.add("caouterbox");

let calcinnerbox = document.createElement("div");
calcouterbox.append(calcinnerbox);
calcinnerbox.classList.add("cainnerbox");

let opr = [];
let backendvalue = "0" ;

let displaybox = document.createElement("input");
calcinnerbox.append(displaybox);
displaybox.setAttribute("type","text");
displaybox.setAttribute("id","text");
displaybox.classList.add("disbox");
displaybox.defaultValue =0;

displaybox.addEventListener("keyup",keyfunc);

function keyfunc(eve){
	console.log(eve);
	console.log(typeof eve.key);
	if(eve.key !=1 && eve.key !=2 && eve.key !=3 && eve.key!=4 && eve.key!=5 && eve.key !=6 && eve.key!=7 && eve.key!=8 && eve.key!=9 && eve.key!=0 && eve.key!= "Backspace"){
		alert("Only numbers are allowed");
	}
	}

let tab = document.createElement("table");
calcinnerbox.append(tab);
tab.classList.add("tab");

let row1 = document.createElement("tr");
tab.append(row1);

let col11 = document.createElement("td");
row1.append(col11);

let b1 = document.createElement("button");
col11.append(b1);
b1.innerHTML = "C";
b1.addEventListener("click",clear);

let col12 = document.createElement("td");
row1.append(col12);

let b2 = document.createElement("button");
col12.append(b2);
b2.innerHTML = "<-";
b2.addEventListener("click",backspace);

let col13 = document.createElement("td");
row1.append(col13);

let b3 = document.createElement("button");
col13.append(b3);
b3.innerHTML = ".";
b3.addEventListener("click",dot);

let col14 = document.createElement("td");
row1.append(col14);

let b4 = document.createElement("button");
col14.append(b4);
b4.innerHTML = "X";
b4.addEventListener("click",multiply);

let row2 = document.createElement("tr");
tab.append(row2);

let col21 = document.createElement("td");
row2.append(col21);

let b5 = document.createElement("button");
col21.append(b5);
b5.innerHTML = "7";
b5.addEventListener("click",seven);

let col22 = document.createElement("td");
row2.append(col22);

let b6 = document.createElement("button");
col22.append(b6);
b6.innerHTML = "8";
b6.addEventListener("click",eight);

let col23 = document.createElement("td");
row2.append(col23);

let b7 = document.createElement("button");
col23.append(b7);
b7.innerHTML = "9";
b7.addEventListener("click",nine);

let col24 = document.createElement("td");
row2.append(col24);

let b8 = document.createElement("button");
col24.append(b8);
b8.innerHTML = "/";
b8.addEventListener("click",divide);

let row3 = document.createElement("tr");
tab.append(row3);

let col31 = document.createElement("td");
row3.append(col31);

let b9 = document.createElement("button");
col31.append(b9);
b9.innerHTML = "4";
b9.addEventListener("click",four);

let col32 = document.createElement("td");
row3.append(col32);

let b10 = document.createElement("button");
col32.append(b10);
b10.innerHTML = "5";
b10.addEventListener("click",five);

let col33 = document.createElement("td");
row3.append(col33);

let b11 = document.createElement("button");
col33.append(b11);
b11.innerHTML = "6";
b11.addEventListener("click",six);

let col34 = document.createElement("td");
row3.append(col34);

let b12 = document.createElement("button");
col34.append(b12);
b12.innerHTML = "-";
b12.addEventListener("click",minus);

let row4 = document.createElement("tr");
tab.append(row4);

let col41 = document.createElement("td");
row4.append(col41);

let b13 = document.createElement("button");
col41.append(b13);
b13.innerHTML = 1;
b13.addEventListener("click",one);

let col42 = document.createElement("td");
row4.append(col42);

let b14 = document.createElement("button");
col42.append(b14);
b14.innerHTML = "2";
b14.addEventListener("click",two);

let col43 = document.createElement("td");
row4.append(col43);

let b15 = document.createElement("button");
col43.append(b15);
b15.innerHTML = "3";
b15.addEventListener("click",three);

let col44 = document.createElement("td");
row4.append(col44);

let b16 = document.createElement("button");
col44.append(b16);
b16.innerHTML = "+";
b16.addEventListener("click",plus);

let row5 = document.createElement("tr");
tab.append(row5);

let col51 = document.createElement("td");
row5.append(col51);

let b17 = document.createElement("button");
col51.append(b17);
b17.innerHTML = "0";
b17.addEventListener("click",zero);

let col52 = document.createElement("td");
row5.append(col52);

let b18 = document.createElement("button");
col52.append(b18);
b18.innerHTML = "00";
b18.addEventListener("click",dzero);

let col53 = document.createElement("td");
row5.append(col53);
col53.setAttribute("colspan","2");

let b19 = document.createElement("button");
col53.append(b19);
b19.innerHTML = "=";
b19.addEventListener("click",equal);

//let col54 = document.createElement("td");
//row5.append(col54);


function seven(){
	//console.log(b13.innerHTML);
	let val = b5.innerHTML;
	//console.log(typeof val);
	//console.log(typeof displaybox.value);
	if(displaybox.value != 0){
	displaybox.value = displaybox.value + val;
	}
	else{
	displaybox.value = val;
	}
	}

function eight(){
	//console.log(b13.innerHTML);
	let val = b6.innerHTML;
	//console.log(typeof val);
	//console.log(typeof displaybox.value);
	if(displaybox.value != 0){
	displaybox.value = displaybox.value + val;
	}
	else{
	displaybox.value = val;
	}
	}

function nine(){
	//console.log(b13.innerHTML);
	let val = b7.innerHTML;
	//console.log(typeof val);
	//console.log(typeof displaybox.value);
	if(displaybox.value != 0){
	displaybox.value = displaybox.value + val;
	}
	else{
	displaybox.value = val;
	}
	}

function four(){
	//console.log(b13.innerHTML);
	let val = b9.innerHTML;
	//console.log(typeof val);
	//console.log(typeof displaybox.value);
	if(displaybox.value != 0){
	displaybox.value = displaybox.value + val;
	}
	else{
	displaybox.value = val;
	}
	}

function five(){
	//console.log(b13.innerHTML);
	let val = b10.innerHTML;
	//console.log(typeof val);
	//console.log(typeof displaybox.value);
	if(displaybox.value != 0){
	displaybox.value = displaybox.value + val;
	}
	else{
	displaybox.value = val;
	}
	}

function six(){
	//console.log(b13.innerHTML);
	let val = b11.innerHTML;
	//console.log(typeof val);
	//console.log(typeof displaybox.value);
	if(displaybox.value != 0){
	displaybox.value = displaybox.value + val;
	}
	else{
	displaybox.value = val;
	}
	}

function one(){
	//console.log(b13.innerHTML);
	let val = b13.innerHTML;
	//console.log(typeof val);
	//console.log(typeof displaybox.value);
	if(displaybox.value != 0){
	displaybox.value = displaybox.value + val;
	}
	else{
	displaybox.value = val;
	}
	//if(backendvalue != "0"){
	//backendvalue = backendvalue + val;
	//}
	//else{
	//backendvalue = val;
	//}
	}

function two(){
	//console.log(b13.innerHTML);
	let val = b14.innerHTML;
	//console.log(typeof val);
	//console.log(typeof displaybox.value);
	if(displaybox.value != 0){
	displaybox.value = displaybox.value + val;
	}
	else{
	displaybox.value = val;
	}
	}

function three(){
	//console.log(b13.innerHTML);
	let val = b15.innerHTML;
	//console.log(typeof val);
	//console.log(typeof displaybox.value);
	if(displaybox.value != 0){
	displaybox.value = displaybox.value + val;
	}
	else{
	displaybox.value = val;
	}
	}

function zero(){
	//console.log(b13.innerHTML);
	let val = b17.innerHTML;
	//console.log(typeof val);
	//console.log(typeof displaybox.value);
	if(displaybox.value != 0){
	displaybox.value = displaybox.value + val;
	}
	else{
	displaybox.value = val;
	}
	}

function dzero(){
	//console.log(b13.innerHTML);
	let val = b18.innerHTML;
	//console.log(typeof val);
	//console.log(typeof displaybox.value);
	if(displaybox.value != 0){
	displaybox.value = displaybox.value + val;
	}
	else{
	displaybox.value = val;
	}
	}

function plus(){
	displaybox.value = displaybox.value + "+" ;
	//opr.push("+");
	//backendvalue  = backendvalue + "o";
	}

function minus(){
	displaybox.value = displaybox.value + "-" ;
	//opr.push("-");
	//backendvalue  = backendvalue + "o";
	}

function multiply(){
	displaybox.value = displaybox.value + "X" ;
	//opr.push("X");
	//backendvalue  = backendvalue + "o";
	}

function divide(){
	displaybox.value = displaybox.value + "/" ;
	//opr.push("X");
	//backendvalue  = backendvalue + "o";
	}

function equal(){
	let str = displaybox.value;
	let arr = str.split("");
	let values = arr.map((ele) => { if(ele == "+" || ele == "-" || ele == "X" || ele == "/"){ return ele = "opr"; } else{ return ele; } });
	console.log(values);
	let rev_str = values.join("");
	let rev_values = rev_str.split("opr").map(Number);
	console.log(rev_values);

	let opr = arr.filter((ele) => { if(ele == "+" || ele =="-" || ele == "X" || ele == "/"){ return ele; } });
	console.log(opr);

	let val = rev_values[0];
	for(let i=0; i<opr.length; i++){
		if(opr[i] == "+"){
			val = val + rev_values[i+1];
		}
		else if(opr[i] == "-"){
			val = val - rev_values[i+1];
		}
		else if(opr[i] == "X"){
			val = val * rev_values[i+1];
		}
		else if(opr[i] == "/"){
			val = val / rev_values[i+1];
		}
	}

	console.log(val);
	displaybox.value = val;
	}

function clear(){
	displaybox.value = 0;
	//backendvalue = "0";
	//opr = [];
	}

function dot(){
	displaybox.value = displaybox.value + "." ;
	//backendvalue = backendvalue + ".";
	}

function backspace(){
	let arr = displaybox.value.split("");
	console.log(arr);
	arr.pop();
	console.log(arr);
	let str = arr.join("");
	console.log(str);
	displaybox.value = str;

	//let arr2 = backendvalue.split("");
	//arr2.pop();
	//let str2 = arr2.join("");
	//backendvalue = str2;
	}