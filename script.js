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

const addTask = () =>{    
    const timeValue = inTime.value;
    const totalTime= timeValue + inTime
    const textValue = inText.value;

    tasknumber+=1;
    listcontent.innerHTML += `<br><input type="checkbox" id="task${tasknumber}" name="task${tasknumber}" ><label for="task${tasknumber}"> ${textValue}   _____________________   ${timeValue}</label>`;
    inText.value="";
    inTime.value="";
    taskDisplay.innerHTML=`<h4 style="font-size:30px; text-align:center;">Tasks left:${tasknumber}</h4>`;
    timeDisplay.innerHTML= `<h4 style="font-size:30px; text-align:center;">Time left:${totalTime}</h4>`;
}
submitButton.addEventListener("click", addTask);


const crossOut = () =>{
        console.log("it worked");
        listcontent.classList.add("crossed");
}
listcontent.addEventListener("click", crossOut);
