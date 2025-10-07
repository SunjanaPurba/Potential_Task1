type Task = {
    id: number;
    title: string;
    completed: boolean;
};

let todos: Task[] = [
    { id: 1, title: "Buy milk", completed: false },
    { id: 2, title: "Buy eggs", completed: true },
    { id: 3, title: "Buy bread", completed: false },
];

function addTask(task: Task) {
    todos.push(task);
    console.log(`Added task: ${task.title}`);
}

function removeTask(id: number) {
    todos = todos.filter((task) => task.id !== id);
    console.log(`Deleted task with id: ${id}`);
}

function completeTask(id: number) {
    todos = todos.map((task) => {
        if (task.id === id) {
            task.completed = true;
            console.log(`Completed task with id: ${id}`);
        }
        return task;
    });
}

addTask({ id: 4, title: "Buy cheese", completed: false });
removeTask(2);
completeTask(1);

console.log(todos);