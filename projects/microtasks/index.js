import { displayTask, completeTask, failTask, updateRunStatus, createRunStatusImage } from "./displayTasks.js";

class TaskQueue {
    constructor() {
        this.queue = [];
        this.busy = false;
        this.errors = [];
    }
    addTask(taskFunction) {
        this.queue.push(taskFunction)
    }
    async runTasks() { 
        if (this.busy) return;
        
        this.busy = true;
        createRunStatusImage();

        while (this.queue.length) {
            const taskFn = this.queue.shift();
            await taskFn()
                .then(data => {
                    console.log(`Task ${data.taskNumber} with ${data.delay}ms delay completed`);
                    completeTask(data.taskNumber, data.completeText)
                })
                .catch(err => {
                    console.log(err);
                    failTask(err.taskNumber, err.failText)
                    this.errors.push(err.taskNumber)
                })  
        }
        this.busy = false;
        updateRunStatus(this.errors.length);

    }
}

function simulateTask(taskNumber, taskData) {
    const { taskTitle, failText, completeText} = taskData;
    const delay = Math.floor(Math.random() * 1500) + 500
    return new Promise((resolve, reject) => {
        console.log(`Task ${taskNumber}: ${taskTitle}`);
        displayTask(taskNumber, taskTitle);
        setTimeout(() => {
            //resolve({taskNumber, completeText, delay});
            reject({taskNumber, failText});
        }, delay);
    })
}

const taskQueue = new TaskQueue();

const messages = [
    {
        taskTitle: "Loading assets...", 
        failText: "Error uploading assets",
        completeText: "Assets loaded"
    },
    {
        taskTitle: "Checking for updates...", 
        failText: "Error processing data",
        completeText: "Updates found"
    },
    {
        taskTitle: "Downloading updates...", 
        failText: "Error downloading updates",
        completeText: "Updates downloaded"
    },
    {
        taskTitle: "Installing updates...", 
        failText: "Error Installing updates",
        completeText: "Updates installed"
    },
    {
        taskTitle: "Saving settings...", 
        failText: "Error saving settings",
        completeText: "Settings saved"
    }
]


taskQueue.addTask(() => simulateTask(1, messages[0]));
taskQueue.addTask(() => simulateTask(2, messages[1]));
taskQueue.addTask(() => simulateTask(3, messages[2]));
taskQueue.addTask(() => simulateTask(4, messages[3]));
taskQueue.addTask(() => simulateTask(5, messages[4]));

taskQueue.runTasks();

