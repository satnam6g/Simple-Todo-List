function addtask(){
    const newTask = document.createElement('li')
    const taskList = document.getElementById('task-list')
    taskList.append(newTask)

    newTask.textContent = document.getElementById('input-task').value
    document.getElementById('input-task').value = " "

    deleteTask(newTask)
}

function deleteTask(newTask){
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    newTask.append(deleteBtn)
    deleteBtn.onclick = function(){
        newTask.remove()
    }
}


document.querySelector('#input-task').addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        addtask()
    }
})