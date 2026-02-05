console.log("Hello");

const listcontent = document.querySelector("#list");
const input = document.querySelector("#input");
const inText = document.querySelector("#taskin");
const submitButton = document.querySelector("#submit");
const inTime = document.querySelector("#timein");
const total = document.querySelector("#total");
const taskDisplay = document.querySelector("#taskDisplay");
const timeDisplay = document.querySelector("#timeDisplay");


let tasknumber=0;
let totalTime = 0;

const addTask = () =>{    
    let timeValue = Number(inTime.value);
    const textValue = inText.value;
    totalTime= totalTime + timeValue;

    tasknumber+=1;
    listcontent.innerHTML += `<br><input type="checkbox" id="task${tasknumber}" name="task${tasknumber}" ><label for="task${tasknumber}"> ${textValue}   _____________________   ${timeValue}</label>`;
    inText.value="";
    inTime.value="";
    taskDisplay.innerHTML=`<h4 style="font-size:30px; text-align:center;">Tasks left:</h4> <p style="font-size 30px;">${tasknumber}</p>`;
    timeDisplay.innerHTML=`<h4 style="font-size:30px; text-align:center;">Time left (Mins):</h4> <p style="font-size 30px;">${totalTime}</p>`;
    console.log(tasknumber);
}
submitButton.addEventListener("click", addTask);


const crossOut = () =>{
        console.log("it worked");
        listcontent.classList.add("crossed");
}
listcontent.addEventListener("click", crossOut);
