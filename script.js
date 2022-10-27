
function makeNumberP() { //generates random number for powders and stores it in y
	var minNumber = 1; 
	 var maxNumber = 13; 
	 var randomnumber = Math.floor((Math.random() * maxNumber) + minNumber); 
	 localStorage.y=randomnumber; 
	 var h = document.getElementsByClassName("answer");
h[0].innerHTML = "Generated";
h[0].style.display="block";
	 setTimeout(hides, 200);
	 
}

function makeNumberL() { //generates random number for liquid and stores it in y
	var minNumber = 1; 
	 var maxNumber = 6; 
	 var randomnumber = Math.floor(Math.random() * maxNumber + minNumber);
	 localStorage.y=randomnumber+13; 
	 var h = document.getElementsByClassName("answer");
h[0].innerHTML = "Generated";
h[0].style.display="block";
	 setTimeout(hides, 200);
}

function makeNumberM() { //generates random number for metal and stores it in y
	var minNumber = 1; 
	 var maxNumber = 6;
	 var randomnumber = Math.floor(Math.random() * maxNumber + minNumber); 
	 localStorage.y=randomnumber; 
	 var h = document.getElementsByClassName("answer");
	 localStorage.y=randomnumber+19; 
h[0].innerHTML = "Generated";
h[0].style.display="block";
	 setTimeout(hides, 200);
}

function makeAnalyze() { //generates random number to pick which picture to show for analysis
	var minNumber = 1; 
	 var maxNumber = 5; 
	 var randomnumber = Math.floor(Math.random() * maxNumber + minNumber); 
	 localStorage.analyze=randomnumber; 
}



function type(){ //make sure you get redirected to the right page
	var x= localStorage.getItem("y");
	var website;
	if (x>=20){
		website = "metal.html";
	}
	else if (x>=14){
	website = "liquid.html";
	}
	else{
	website = "powder.html";
	}
	document.getElementById("type").href = website;
}


function fizz(){ //generates HCl results
var reactionAcid;
var x = localStorage.getItem("y");
if (x==3 || x==10|| x== 12){
reactionAcid = "https://imgur.com/fJcJpQ0.gif";
}
else if (x==23 || x==22){
reactionAcid = "https://imgur.com/5xeRZUN.gif"
}
else if (x==21||x==24||x==25){
reactionAcid = "https://imgur.com/mouJrZA.gif"
}
else if (x==20){
reactionAcid = "https://imgur.com/sGLCyL8.png"
}
else {
reactionAcid = "https://imgur.com/HRlVa7d.png";
}
document.getElementById("acid").src= reactionAcid;
}


function water(){ //generates water results
var reactionWater;
var x = localStorage.getItem("y");
if (x==10){
reactionWater = "https://imgur.com/fJcJpQ0.gif";
}
else if (x== 3 || x== 7 || x== 13 ){
reactionWater =  "https://imgur.com/XjGhWFH.png";
}
else if (x==2){
reactionWater= "https://imgur.com/2mPmbFK.png";
}
else if (x==8){
reactionWater= "https://imgur.com/HRlVa7d.png";
}
else if (x==9){
reactionWater= "https://imgur.com/3wZ80DU.png";
}
else if (x==11){
reactionWater= "https://imgur.com/yEmOWbj.png";
}
else if (x==25){
reactionWater = "https://imgur.com/mouJrZA.gif"
}
else if (x==21||x==24||x==22||x==23||x==20){
reactionWater = "https://imgur.com/sGLCyL8.png"
}
else {
reactionWater= "https://imgur.com/nJGTEI9.png";
}
document.getElementById("water").src= reactionWater;
}


function iodine(){ //generates iodine results
var reactionIodine;
var x = localStorage.getItem("y");
if (x==7 || x==8){
reactionIodine = "https://imgur.com/Lw6QTYi.png";
}
else if (x==4){
reactionIodine ="https://imgur.com/nJGTEI9.png";
}
else if (x==15){
reactionIodine = "https://imgur.com/zuxiNaF.png";
}
else {
reactionIodine = "https://imgur.com/Qcr3JL3.png";
}
document.getElementById("iodine").src= reactionIodine;
}


function magnetic(){
var reactionMagnet;
var x= localStorage.getItem("y");
if (x==24){
reactionMagnet = "magnetic";
}
else {
reactionMagnet = "not magnetic";
}
document.getElementById("magnet").innerHTML = reactionMagnet;
}


function ph(){ //generate ph paper
var reactionph;
var x = localStorage.getItem("y");
if (x==1 || x==8 || x==12){
reactionph = "https://imgur.com/2b1bjCJ.png";
}
else if (x==5 || x==6 || x==11||x==14||x==15){
reactionph = "https://imgur.com/2b1bjCJ.png";
}
else if (x==4||x==17||x==16){
reactionph = "https://imgur.com/AbR8CDi.png"
}
else if (x==18){
reactionph = "https://imgur.com/jIyM8pu.png"
}
else {
reactionph = "https://imgur.com/1qa1PWj.png";
}
document.getElementById("ph").src= reactionph;
}


function pick(){ //generates picture for analysis
var powder;
var x= localStorage.getItem("y");
var z =  localStorage.getItem("analyze");
switch (x) {
  case "1":
    powder = "https://imgur.com/LN4p4FP.jpeg";
    break;
  case "2":
  switch (z){
  	case "1":
    powder = "https://imgur.com/5BVWmte.jpeg";
    break;
    case "2":
    powder = "https://imgur.com/qkWO18Y.jpeg";
    break;
    case "3":
    powder = "https://imgur.com/r80W5R3.jpeg";
    break;
    case "4":
    powder = "https://imgur.com/sk9LNsF.jpeg";
    break;
    case "5":
    powder = "https://imgur.com/TulJm8y.jpeg";
	break;
	}
    break;
  case "3":
  	switch (z){
  	case "1":
    powder = "https://imgur.com/r3XW9Gj.jpeg";
    break;
    case "2":
    powder = "https://imgur.com/y1ekS0r.jpeg";
    break;
    case "3":
    powder = "https://imgur.com/dFwegbX.jpeg";
    break;
    case "4":
    powder = "https://imgur.com/5jYLUQO.jpeg";
    break;
    case "5":
    powder = "https://imgur.com/q3ANdnS.jpeg";
    break;
    }
    break;
  case "4":
    powder = "https://imgur.com/MhyVBFL.jpeg";
    break;
  case "5":
    powder = "https://imgur.com/xyNmMFQ.jpeg";
    break;
  case  "6":
    powder = "https://imgur.com/9KXpZ4t.jpeg";
    break;
     case "7":
     switch (z){
  	case "1":
    powder = "https://imgur.com/zNFnJHb.jpeg";
    break;
    case "2":
    powder = "https://imgur.com/dbPQjbN.jpeg";
    break;
    case "3":
    powder = "https://imgur.com/slFkoIL.jpeg";
    break;
    case "4":
    powder = "https://imgur.com/1OCj08K.jpeg";
    break;
    case "5":
    powder = "https://imgur.com/rGcppsh.jpeg";
    break;
    }

    break;
     case "8":
     switch (z){
  	case "1":
    powder = "https://imgur.com/5iKFKRL.jpeg";
    break;
    case "2":
    powder = "https://imgur.com/JYopL45.jpeg";
    break;
    case "3":
    powder = "https://imgur.com/iZ2F1AW.jpeg";
    break;
    case "4":
    powder = "https://imgur.com/jjdRlWK.jpeg";
    break;
    case "5":
    powder = "https://imgur.com/Qnvks0a.jpeg";
    break;
    }
    break;
     case "9":
     switch (z){
  	case "1":
    powder = "https://imgur.com/lLjsWfv.jpeg";
    break;
    case "2":
    powder = "https://imgur.com/1kUOAHW.jpeg";
    break;
    case "3":
    powder = "https://imgur.com/7ck8vWZ.jpeg";
    break;
    case "4":
    powder = "https://imgur.com/jEhErlk.jpeg";
    break;
    case "5":
    powder = "https://imgur.com/dNeo1xj.jpeg";
    break;
    }
    break;
     case "10":
    powder = "https://imgur.com/OhbTnO2.jpeg";
    break;
     case "11":
    powder = "https://imgur.com/1zGdca1.jpeg";
    break;
     case "12":
     switch (z){
  	case "1":
    powder = "https://imgur.com/O2UaEAb.jpeg";
    break;
    case "2":
    powder = "https://imgur.com/wtrfCeT.jpeg";
    break;
    case "3":
    powder = "https://imgur.com/pSsXEAG.jpeg";
    break;
    case "4":
    powder = "https://imgur.com/88rFA6F.jpeg";
    break;
    case "5":
    powder = "https://imgur.com/CIZk4CO.jpeg";
    break;
    }
    break;
     case "13":
    powder = "https://imgur.com/A6kSZTE.jpeg";
    break;
    case "14":
    powder = "https://imgur.com/U2zjoia.png";
    break;
    case "15":
    powder = "https://imgur.com/U2zjoia.jpeg";
    break;
    case "16":
    powder = "https://imgur.com/U2zjoia.jpeg";
    break;
    case "17":
    powder = "https://imgur.com/qRF8VHC.png";
    break;
    case "18":
    powder = "https://imgur.com/U2zjoia.jpeg";
    break;
    case "19":
    powder = "https://imgur.com/U2zjoia.jpeg";
    break;
    case "20":
    powder = "https://imgur.com/CVXZRh9.jpeg";
    break;
    case "21":
    powder = "https://imgur.com/i7pMsoh.jpeg";
    break;
    case "22":
    powder = "https://imgur.com/MGc2ojF.jpeg";
    break;
    case "23":
    powder = "https://imgur.com/rTxpbxJ.jpeg";
    break;
    case "24":
    powder = "https://imgur.com/ddYsOHB.jpeg";
    break;
    case "25":
    powder = "https://imgur.com/3UBfdJw.jpeg";
    break;
    
}
document.getElementById("demo").src = powder;
}



function answer(){ //generates answer based on storage of y
var powder;
var x= localStorage.getItem("y");
switch (x) {
  case "1":
    powder = "Sodium Acetate";
    break;
  case "2":
    powder = "Sand";
    break;
  case "3":
    powder = "Calcium Carbonate";
    break;
  case "4":
    powder = "Vitamin C";
    break;
  case "5":
    powder = "Salt";
    break;
  case  "6":
    powder = "Sugar";
    break;
     case "7":
    powder = "Flour";
    break;
     case "8":
    powder = "Cornstarch";
    break;
     case "9":
    powder = "Gelatin";
    break;
     case "10":
    powder = "Alka-Seltzer";
    break;
     case "11":
    powder = "Yeast";
    break;
     case "12":
    powder = "Baking Soda";
    break;
     case "13":
    powder = "Calcium Sulfate";
    break;
     case "14":
    powder = "Water";
    break;
     case "15":
    powder = "Hydrogen Peroxide";
    break;
    case "16":
    powder = "Vinegar";
    break;
    case "17":
    powder = "Lemon Juice";
    break;
    case "18":
    powder = "Ammonia";
    break;
    case "19":
    powder = "Rubbing Alcohol";
    break;
    case "20":
    powder = "Copper";
    break;
    case "21":
    powder = "Zinc";
    break;
    case "22":
    powder = "Tin";
    break;
    case "23":
    powder = "Aluminum";
    break;
    case "24":
    powder = "Iron";
    break;
    case "25":
    powder = "Magnesium";
    
}

var h = document.getElementsByClassName("answer");
h[0].innerHTML = "This is " + powder + "!";
h[0].style.display="block";
	 setTimeout(hides, 800);
}



function check(){ //checks guess
var powder;
var x= localStorage.getItem("y");
switch (x) {
  case "1":
    powder = "Sodium Acetate";
    break;
  case "2":
    powder = "Sand";
    break;
  case "3":
    powder = "Calcium Carbonate";
    break;
  case "4":
    powder = "Vitamin C";
    break;
  case "5":
    powder = "Salt";
    break;
  case  "6":
    powder = "Sugar";
    break;
     case "7":
    powder = "Flour";
    break;
     case "8":
    powder = "Cornstarch";
    break;
     case "9":
    powder = "Gelatin";
    break;
     case "10":
    powder = "Alka-Seltzer";
    break;
     case "11":
    powder = "Yeast";
    break;
     case "12":
    powder = "Baking Soda";
    break;
     case "13":
    powder = "Calcium Sulfate";
    break;
     case "14":
    powder = "Water";
    break;
     case "15":
    powder = "Hydrogen Peroxide";
    break;
    case "16":
    powder = "Vinegar";
    break;
    case "17":
    powder = "Lemon Juice";
    break;
    case "18":
    powder = "Ammonia";
    break;
    case "19":
    powder = "Rubbing Alcohol";
    break;
    case "20":
    powder = "Copper";
    break;
    case "21":
    powder = "Zinc";
    break;
    case "22":
    powder = "Tin";
    break;
    case "23":
    powder = "Aluminum";
    break;
    case "24":
    powder = "Iron";
    break;
    case "25":
    powder = "Magnesium";
    
}

var h = document.getElementById("guess").value;
if (powder==h){
var g = document.getElementsByClassName("guess");
g[0].innerHTML = "Right answer!";
g[0].style.display="block";
	 setTimeout(hides, 800);
}
else{
var g = document.getElementsByClassName("guess");
g[0].innerHTML = "Try again!";
g[0].style.display="block";
	 setTimeout(hides, 800);
}
}


function smell(){ //generates answer based on storage of y
var scent;
var x= localStorage.getItem("y");
switch (x) {
  case "1":
    scent = " ";
    break;
  case "2":
    scent = " ";
    break;
  case "3":
    scent = "   ";
    break;
  case "4":
    scent = "  ";
    break;
  case "5":
    scent = " ";
    break;
  case  "6":
    scent = " ";
    break;
     case "7":
    scent = " ";
    break;
     case "8":
    scent = " ";
    break;
     case "9":
    scent = "scent";
    break;
     case "10":
    scent = " ";
    break;
     case "11":
    scent = " ";
    break;
     case "12":
    scent = "";
    break;
     case "13":
    scent = " ";
    break;
     case "14":
    scent = "Smells like nothing.";
    break;
     case "15":
    scent = "Smells like nothing.";
    break;
    case "16":
    scent = "Smells stinky.";
    break;
    case "17":
    scent = "Smells like citrus.";
    break;
    case "18":
    scent = "Smells intense and like urine?";
    break;
    case "19":
    scent = "Smells sweet and intense.";
    break;
    case "20":
    scent = " ";
    break;
    case "21":
    scent = " ";
    break;
    case "22":
    scent = " ";
    break;
    case "23":
    scent = " ";
    break;
    case "24":
    scent = " ";
    break;
    case "25":
    scent = "";
    
}
var smelly = document.getElementsByClassName("smells");
smelly[0].innerHTML = scent;
smelly[0].style.display="block";
}

function hides() {
var h = document.getElementsByClassName("answer");
var g = document.getElementsByClassName("guess");
h[0].style.display="none";
g[0].style.display="none";
}

