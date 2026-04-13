const fs = require("fs");

const args = process.argv.slice(2);
const command = args[0];
const sub_command = args[1]
if (!command) {
    console.log("Please provide a valid command.");
    process.exit(1);
}
const task_description = args[1];

const task_list = fs.readFileSync("task-list.json", "utf-8");
const data = JSON.parse(task_list);
const tasks = data.tasks;

// add
if (command === "add") {

    if (!task_description) {
        console.log("Please provide a task description.");
        process.exit(1);
    }

    const newTask = {
        id: data.lastId + 1,
        description: task_description,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    data.lastId = data.lastId + 1;

    tasks.push(newTask);

    fs.writeFileSync("task-list.json", JSON.stringify(data, null, 2), "utf-8");
    console.log(`Task added successfully (ID : ${data.lastId})`);
}

// update

// delete

// mark-in-progress

//mark-done

// list
else if (command === "list" && !sub_command) {
    if (tasks.length === 0) {
        console.log("No tasks found.");
    } else {
        console.log("All Tasks:");
        tasks.forEach(task => {
            console.log(`${task.id} || ${task.description} || ${task.status}`);
        });
    }
}

// list todo
else if (command === "list" && sub_command === "todo") {
    const todoTasks = tasks.filter(task => task.status === "todo");
    if (todoTasks.length === 0) {
        console.log("No TODO tasks found.");
    } else {
        console.log("All TODO Tasks:");
        todoTasks.forEach(task => {
            console.log(`${task.id} || ${task.description} || ${task.status}`);
        });
    }
}

// list in-progress
else if (command === "list" && sub_command === "in-progress") {
    const inprogressTasks = tasks.filter(task => task.status === "in-progress");
    if (inprogressTasks.length === 0) {
        console.log("No In-Progress tasks found.");
    } else {
        console.log("All In-Progress Tasks:");
        inprogressTasks.forEach(task => {
            console.log(`${task.id} || ${task.description} || ${task.status}`);
        });
    }
}

// list done
else if (command === "list" && sub_command === "done") {
    const doneTasks = tasks.filter(task => task.status === "done");
    if (doneTasks.length === 0) {
        console.log("No Done tasks found.");
    } else {
        console.log("All Done Tasks:");
        doneTasks.forEach(task => {
            console.log(`${task.id} || ${task.description} || ${task.status}`);
        });
    }
}

// console.log("Arguments passed: ", args);