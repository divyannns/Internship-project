const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value =='') {           // input-box is empty
        alert("please enter the text");  //alert message for empty input box
      }
      else{
        const li = document.createElement("li") // creating element with tagname(li) and storing an element in 'li' var
        li.innerHTML = inputBox.value;  // text add in li
        ListContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";    // \u00d7 is cross icon
        li.appendChild(span)   // display the span
      }

      inputBox.value ="";  // input box is empty beacuse user gives the input
      saveData();
}
ListContainer.addEventListener("click", (e) => {
  if(e.target.tagName === "LI"){   
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElemet.remove();
    saveData();
  }
})

function saveData(){
  localStorage.setItem("data" , ListContainer.innerHTML)
}

function showTask(){
  ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();