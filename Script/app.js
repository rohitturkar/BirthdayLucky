const birthdayInput=document.querySelector("#input-date");
const luckyNoInput=document.querySelector("#input-lucky");
const checkBtn=document.querySelector("#check-btn");
const clearBtn=document.querySelector("#clear-btn");
const outputDiv=document.querySelector("#output");


clearBtn.addEventListener("click",()=>{
    location.reload();
})
checkBtn.addEventListener("click",()=>{
    var birthdayValue = birthdayInput.value;
    var luckyValue = luckyNoInput.value;
    if (birthdayValue !== "" || luckyValue !== "") {
      outputHandler(birthdayValue, luckyValue);
    } else {
      alert("Please Enter Correct Information!");
    }
})


function outputHandler(birthday,lucky){
let resultArray=[];
let sum=0;
for(let i=0;i<birthday.length;i++){
   resultArray.push(birthday.charAt(i));
}

for(let j=0;j<resultArray.length;j++){
    if(resultArray[j]!=="-")
    sum=sum+Number(resultArray[j]);
}

if(sum%lucky===0){
    outputDiv.innerText="your are lucky!! 😄🕺"
}
else{
    outputDiv.innerText="your are not lucky 😥"
}
}


