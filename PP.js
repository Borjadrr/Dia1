console.log("I'm Ready!");
var hacker1 = "Carlos";
console.log("The drivers name is " + hacker1);
var hacker2 = prompt("What's the navigators name?");
console.log("the navigator name is "+ hacker2);

if (hacker1.length === hacker2.length) {
  console.log("wow you got equially long names " + hacker1.length + " characters")
}
else if (hacker1.length > hacker2.length) {
  console.log("The driver has the logest name, it has " + hacker1.length + " characters")
}
else {
  console.log("The navigator has the logest name, it has " + hacker2.length + " characters")
}

var mayus = hacker1.toUpperCase();

var space = " ";
var final = "";
for( var i=0; i< mayus.length; i++){

  final = final + mayus[i]+ space;
}

console.log(final);

var reverse = "";

for ( i= hacker2.length;i>0 ;i--){

  reverse += hacker2[i-1];
}
console.log(reverse);

var array = [hacker1,hacker2];

array.sort();

if (hacker1===hacker2){
  console.log("wow you got the same name");
}

else if (array[0]==hacker1){
  console.log("the drivers name goes first");
}
else if (array[0]==hacker2){
  console.log("Navigator goes first");
}
var palindrome = prompt("Mete un palindromo");
var nospaces = "";
for(i=0; i<palindrome.length;i++){
  if(palindrome[i]!=" "&&palindrome[i]!="?"&&palindrome[i]!="!"&&palindrome[i]!=","){
    nospaces += palindrome[i];
  }
}
nospaces = nospaces.toUpperCase();
var isPalindrome = "Yes";
j=nospaces.length-1;
for(i=0; i<j;i++){
  if(nospaces[i]!=nospaces[j]){
    isPalindrome="No";
    break;
  }
  j--;
}

console.log("Is it a palindrome?: " + isPalindrome);



lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nulla, euismod eget tortor ut, ullamcorper sodales nisi. Nam eget lorem quis justo lobortis efficitur sed id mi. Ut posuere viverra eleifend. Mauris lobortis massa ut diam maximus fermentum. Vestibulum et pretium leo. Nulla iaculis, purus in aliquet tristique, lectus eros mattis ex, ac tempus diam ante in nulla. Duis pellentesque ornare sapien, nec faucibus turpis porta sit amet. Proin maximus sollicitudin nunc a suscipit. Nulla vulputate ullamcorper augue, tempus ultrices leo. Aenean ut est elementum, dapibus risus et, dictum est. Ut tempor enim non justo lobortis auctor. et";

var words = lorem.split(" ").length;
console.log(words);
var et = lorem.split("et").length-1;
console.log(et);
