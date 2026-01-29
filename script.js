console.log("Hello");

const listcontent = document.querySelector("#list");
const input = document.querySelector("#input");
const inText = document.querySelector("#taskin");
const submitButton = document.querySelector("#submit");

let tasknumber=0;

const addTask = () =>{
    tasknumber+=1;
    listcontent.innerHTML += `<br><input type="checkbox" id="task${tasknumber}" name="task${tasknumber}"><label for="task${tasknumber}">${input}</label>`;
}
submitButton.addEventListener("click", addTask)