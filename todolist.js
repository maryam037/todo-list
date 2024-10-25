const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const clearCompletedButton = document.getElementById("clearCompletedButton");
const saveButton = document.getElementById("saveButton");

addTaskButton.addEventListener("click", addTask);
clearCompletedButton.addEventListener("click", clearCompletedTasks);
saveButton.addEventListener("click", showSignInOrSignUp);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");  // Show alert if task is empty
    } else {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        const taskLabel = document.createElement("label");
        const checkbox = document.createElement("input");
        const taskTextSpan = document.createElement("span");
        const deleteButton = document.createElement("button");

        taskLabel.classList.add("checkbox-container");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        taskTextSpan.textContent = taskText;
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-delete", "ms-2");

        deleteButton.addEventListener("click", deleteTask);
        checkbox.addEventListener("change", toggleTask);
        li.appendChild(taskLabel);
        taskLabel.appendChild(checkbox);
        taskLabel.appendChild(taskTextSpan);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";  // Clear input after adding task
    }
}

function toggleTask(event) {
    const checkbox = event.target;
    const taskItem = checkbox.closest("li");

    if (checkbox.checked) {
        taskItem.classList.add("completed");
    } else {
        taskItem.classList.remove("completed");
    }
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}

function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll(".task-checkbox:checked");
    if (completedTasks.length === 0) {
        alert("Please select a task to clear.");  // Alert if no task is selected
    } else {
        completedTasks.forEach(taskItem => {
            const li = taskItem.closest("li");
            taskList.removeChild(li);
        });
    }
}

// Save button functionality
function showSignInOrSignUp() {
    const userResponse = confirm("You need to Sign In or Sign Up to save tasks. Do you want to proceed?");
    if (userResponse) {
        window.location.href = "signup.html"; // Replace with your actual sign-in/sign-up page URL
    }
}

// Add an event listener for the Sign Up button
document.getElementById('signUpButton').addEventListener('click', function() {
    window.location.href = 'signup.html'; // Redirect to signup.html
});

// You can also add functionality for the Sign In button if needed
document.getElementById('signInButton').addEventListener('click', function() {
    window.location.href = 'signin.html'; // Redirect to signin.html
});

