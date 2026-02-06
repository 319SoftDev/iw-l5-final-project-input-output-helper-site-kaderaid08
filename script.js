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
let completedTasks = 0;
let completedTime = 0;


const updateDisplays = () =>{
    const tasksLeft = tasknumber - completedTasks;
    const timeLeft = totalTime - completedTime;

    taskDisplay.innerHTML=`<h4 style="font-size:30px; text-align:center;">Tasks left:</h4> <p style="font-size 30px;">${tasksLeft}</p>`;
    timeDisplay.innerHTML=`<h4 style="font-size:30px; text-align:center;">Time left (Mins):</h4> <p style="font-size 30px;">${timeLeft}</p>`;
 
}





const addTask = () =>{    
    let timeValue = Number(inTime.value);
    const textValue = inText.value;

    if (!textValue || !timeValue){
        alert(`Please enter both a task and time`);
        return;
    }

    totalTime= totalTime + timeValue;
    tasknumber+=1;

    listcontent.innerHTML += `<br><input type="checkbox" id="task${tasknumber}" name="task${tasknumber}" data-time="${timeValue}"><label for="task${tasknumber}"> ${textValue}   _____________________   ${timeValue}</label>`;

    inText.value="";
    inTime.value="";
       
    console.log(tasknumber);

    updateDisplays();
}
submitButton.addEventListener("click", addTask);





 

const crossOut = (event) =>{
    console.log("it worked");
    if (event.target.type === `checkbox`){
        const checkbox = event.target;
        const label = checkbox.nextElementSibling;
        const taskTime = Number(checkbox.dataset.time);

        if (checkbox.checked){
            label.style.textDecoration = `line-through`;
            label.style.opacity = `0.5`;
            completedTasks++;
            completedTime += taskTime;
        }else{
            label.style.textDecoration = `none`;
            label.style.opacity = `1`;
            completedTasks -- ;
            completedTime -= taskTime;
        }
        updateDisplays();
    }

}
listcontent.addEventListener("click", crossOut);

updateDisplays();
