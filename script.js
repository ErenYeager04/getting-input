
var messages = document.getElementById("messages");
var text = document.getElementById("text");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    var newMessage=document.createElement("li");
    newMessage.innerHTML = text.value;
    messages.appendChild(newMessage);
    text.value = "";
    });
var isMale = false;
var isTall = false;
if(isMale && isTall){
document.write("You are tall male");
} else if(isMale && !isTall){
document.write("You are short dude");
}
 else if(isTall && !isMale){
document.write ("You still have pussy");
}
else{
document.write("You have pussy");
}
function dick(num1,num2,num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    }
    else if(num2>=num1 && num2>=num3){
        return num2;
    }
    else{
        return num3;
    }
}
document.write(dick(89,10,99));

function getDayName(dayNum){
var dick;
switch(dayNum){
case 0:
dick = "Sunday";
break;
case 1:
dick = "Monday";
break;
case 2:
dick = "Tuesday";
break;
case 3:
dick = "Wednesday";
break;
case 4:
dick = "Thirsday";
break;
case 5:
dick = "Friday";
break;
case 6:
dick = "Saturday";
break;
default:
dick = dayNum + " doesnt exist"


}


return dick;
}
document.write(getDayName(5));

var mur = {
    name: "Muralim",
    age:20,
    isFemale:false
};
document.write(mur.age)

var password = "wordpass";
var respons;
var entryCount = 0;
var entryLimit = 4;
var error = false;

while(respons != password && !error){
 if(entryCount<entryLimit){
    respons = window.prompt("Enter the password");
    entryCount++;
 } else {
     error = true;
 }
}
if(error){
    alert("Too many tries")
}else{
    alert("You got it");
}

var questions = [
{
    prompt: "Color of the leaf?\n(a) Red\n(b) Blue\n(c) Green",
    answer: "dick"
},
{
    prompt: "Color of the car?\n(a) Red\n(b) Blue\n(c) Green",
    answer: "b"
},
{
    prompt: "Color of the blood?\n(a) Red\n(b) Blue\n(c) Green",
    answer: "a"
},
]
var score = 0;
for(var i=0; i< questions.length; i++){
    var respons = window.prompt(questions[i].prompt)
    if(respons == questions[i].answer){
     score++;
     alert("You got it");
    }else{
        alert("You got it wrong");
    }
}
alert("You got " + score + "/" + questions.length)





