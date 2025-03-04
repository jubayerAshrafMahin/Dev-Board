const tasksContainer = document.getElementById("tasks-container");
const tasksRemaining = document.getElementById("tasks-remaining");
const tasksCompleted = document.getElementById("tasks-completed");
const clearHistoryBtn = document.getElementById("clear-history-btn");


const day = document.getElementById("day");
const date = document.getElementById("date");
console.log(day);
console.log(date);

weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let today = new Date();
day.innerText = weekdays[today.getDay()];
console.log(today.getDay());
date.innerHTML = `
${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}
`
let taskCounter = 0;
tasksContainer.addEventListener("click", function(event){
    
    // finding button click and making it disabled
    if(event.target.tagName==="BUTTON"){
        let btn = event.target;
        btn.style.opacity = "0.3";
        btn.style.cursor = "not-allowed";
        btn.disabled = true;
        alert("Board Updated Successfully!");
        taskCounter++;

        // adding task completed
        let completed = parseInt(tasksCompleted.innerText);
        tasksCompleted.innerText = completed+1;
        console.log("task added");

        //reducing remaining task
        let remaining = parseInt(tasksRemaining.innerText);
        tasksRemaining.innerText = "0" + (remaining-1);
        console.log("remaining tasks reduced");

        // on completing all the tasks successfully
        if(taskCounter===6)
        {
            alert("Congratulations! You have successfully completed all the tasks.");
        }

        console.log(btn.parentNode.parentNode.children[0].children[1].innerText);
        let taskTitle = btn.parentNode.parentNode.children[0].children[1].innerText;
        addToHistory(taskTitle);
    }

    clearHistoryBtn.addEventListener("click", function(){
        clearHistory();
    })

})