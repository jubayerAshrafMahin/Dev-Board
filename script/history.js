function addToHistory(taskTitle){
    const historyContainer = document.getElementById("history-container");
    let history = document.createElement("div");

    let now = new Date();
    let hours = now.getHours();
    if(hours<12 && hours>0){
        hours = hours;
        mins = now.getMinutes();
        seconds = now.getSeconds()+" AM";
    }
    else if(hours==0)
    {
        hours = 12;
        mins = now.getMinutes();
        seconds = now.getSeconds()+" AM";
    }
    else{
        hours = hours-12;
        mins = now.getMinutes();
        seconds = now.getSeconds()+" PM";
    }
    history.innerHTML=`
    You have completed the task ${taskTitle} at ${hours}:${mins}:${seconds}
    `
    history.classList.add("bg-slate-100", "rounded-lg", "p-4", "mb-3")
    historyContainer.appendChild(history);
}

function clearHistory()
{
    const historyContainer = document.getElementById("history-container");
    for(let child of historyContainer.children){
        child.remove();
    }
}