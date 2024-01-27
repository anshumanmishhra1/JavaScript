let todo = [];

let req = prompt("Enter your request!");

while (true) {
    if (req.toLowerCase() === "quit") {
        console.log("Quitting app");
        break;
    }

    if (req.toLowerCase() === "list") {
        console.log("....................");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("....................");
    } else if (req.toLowerCase() === "add") {
        let task = prompt("Please enter your task you want to add");
        todo.push(task);
        console.log("Task added!");
    } else if (req.toLowerCase() === "delete") {
        let idx = prompt("Please enter the task index");
        todo.splice(idx, 1);
        console.log("Task deleted");
    }

    req = prompt("Enter your request!");
}
