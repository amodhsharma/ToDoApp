const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//writing a function to take input and display function when something isnt added
function addTask(){
    if(inputBox.value==''){ //if input box is empty
        alert("You must enter something before!")
    }else{  //when input is added
        let li=document.createElement("li");    //creting an element li and storing it in li 
        li.innerHTML = inputBox.value;  //adding the input element value in li 
        listContainer.appendChild(li);  //the list container will store li

        let span = document.createElement("span");  //creates a new html element of type span 
        span.innerHTML = "\u00d7"; //Adds cross icon to span
        //allows you to set or get the HTML content inside the span element.
        li.appendChild(span);
    }
    inputBox.value=""; //the value in the input box automatically resets to empty
    saveData(); //everytime after we add a new data element, we have to save it and call the function
}

//to remove/check element
listContainer.addEventListener("click",function(e){ //whenever we will click on the list container
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData(); //everytime after we add a new data element, we have to save it and call the function
    }else if(e.target.tagName==="SPAN"){    //if we click on span
        e.target.parentElement.remove(  )
        saveData(); //everytime after we add a new data element, we have to save it and call the function
    }
},false);

//fumction to retain the data everytime we close and open the browser
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//fumction to automatically show the data everytime we open the browser again and again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();