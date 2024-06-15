function createTask(taskNumber, taskTitle) {
    const container = document.createElement("div");
    const taskText = document.createElement("p");
    const statusImg = document.createElement("img");

    container.classList.add("task-container");
    container.id = `task${taskNumber}`

    statusImg.src = "../../images/loading.gif";
    statusImg.width = "25";
    statusImg.height = "25";
    taskText.textContent = `Task ${taskNumber}: ${taskTitle}`;

    container.append(statusImg);
    container.append(taskText);

    return container;
}
    
export function displayTask(taskNumber, taskTitle) {
    const resultContainer = document.querySelector("#result");
    resultContainer.append(createTask(taskNumber, taskTitle));    
}

export function completeTask(taskNumber, completeText) {
    const taskContainer = document.querySelector(`#task${taskNumber}`);
    taskContainer.classList.add("completed");

    const statusImg = document.querySelector(`#task${taskNumber} img`);
    statusImg.src = "../../images/completed.png";

    const taskText = document.querySelector(`#task${taskNumber} p`);
    taskText.textContent = `Completed:  ${completeText}.`;
}

export function failTask(taskNumber, failText) {
    const taskContainer = document.querySelector(`#task${taskNumber}`);
    taskContainer.classList.add("failed");

    const statusImg = document.querySelector(`#task${taskNumber} img`);
    statusImg.src = "../../images/failed.png";

    const taskText = document.querySelector(`#task${taskNumber} p`);
    taskText.textContent = `Failed:  ${failText}`;
}


export function createRunStatusImage() {
    const runStatusContainer = document.querySelector(`#runStatus`);
    const runStatusImg = document.createElement("img");
    runStatusImg.src = "../../images/loadingBar.gif" 
    runStatusContainer.append(runStatusImg);
}

export function updateRunStatus(isError) {
    const runStatusImg = document.querySelector(`#runStatus img`);

    if (isError) {
        runStatusImg.src = "../../images/error.gif"
    } else {   
        runStatusImg.src = "../../images/press-start.gif"  
    }
}
