const text = document.getElementById('text');
const taskList = document.getElementById('task-list');

function addTask() {
    if (text.value.trim() === '') {
        alert('Please enter a task');
    } else {
    let li = document.createElement('li')
    li.textContent = text.value.trim();
    taskList.appendChild(li);
    let span = document.createElement('span');
    span.textContent = '\u00d7';
    li.appendChild(span);
    }
    text.value = '';
    saveData();
}

taskList.addEventListener('click',function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem('data',taskList.innerHTML);
}
function showList() {
    taskList.innerHTML = localStorage.getItem('data');
}
showList();