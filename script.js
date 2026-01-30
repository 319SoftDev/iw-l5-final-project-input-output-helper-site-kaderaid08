console.log("Hello");

const listcontent = document.querySelector("#list");
const input = document.querySelector("#input");
const inText = document.querySelector("#taskin");
const submitButton = document.querySelector("#submit");

let tasknumber=0;

const addTask = () =>{
    const textValue = inText.value;
    tasknumber+=1;
    listcontent.innerHTML += `<br><input type="checkbox" id="task${tasknumber}" name="task${tasknumber}" ><label for="task${tasknumber}"> ${textValue}</label>`;
    inText.value="";
}
submitButton.addEventListener("click", addTask);

const crossOut = () =>{
    if (inText.checked==True){
        console.log("it worked");
    }
}

