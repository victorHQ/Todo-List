import Utils from './utils.js';

export default class Main{
    // =================================== Core Functions ===================================
    submitTask(){
        btnTask.addEventListener('click', () => {
            this.inputVerify();
            this.clearInput();
        });
        
        inputTask.addEventListener('keypress', event => {
            if(event.keyCode === 13) {
                this.inputVerify();
                this.clearInput();
            }
        });
    }
    
    inputVerify(){
        if(this.isEmpty(inputTask.value) || inputTask.value.length > MAX_TEXT) return;
            this.createTask(inputTask.value);
    }

    isEmpty(str) {
        return !str.trim().length;
    }

    clearInput(){
        inputTask.value = '';
        inputTask.focus();
        utils.completedTasks();
    }

    deleteTask(){
        document.addEventListener('click', event => {
            const element = event.target;
        
            if(element.classList.contains('delete')){
                element.closest("#tasks > .task").remove();
            } 
            this.saveTasks();    
        }); 
    }

    deleteAllTasks(){
        document.addEventListener('click', event => {
            const element = event.target;

            if(element.classList.contains('delete-all-tasks')){
                let tasks = document.querySelectorAll('.task');

                for (let i = 0; i < tasks.length; i++) {
                    tasks[i].remove();
                }
            }
            this.saveTasks();
        })
    }

    createTask(inputTask){
        tasks.innerHTML += ` 
        <div class="task"> 
            <span class="taskname">
                ${inputTask}
            </span>
            <button class="delete"> 
                <i class="fas fa-trash delete"></i>
            </button>
        </div> 
    `;
    this.saveTasks(); 
    }

    //=================================== Local Storage Tasks ===================================
    saveTasks() {

        utils.countTasks();

        const divTasks = tasks.querySelectorAll('.taskname');
        const buttonErase = tasks.querySelectorAll('.delete');
        const listOfTasks = [];
        let taskText;

        for (let task of divTasks){
            taskText = task.innerText;
            buttonErase.innerHTML = ''.trim();
            listOfTasks.push(taskText);
        }
    
        const tasksJSON = JSON.stringify(listOfTasks);
        localStorage.setItem('tasks', tasksJSON);
    }
    
    addSavedTasks() {

        utils.countTasks();

        let tasks = localStorage.getItem('tasks');
        const listOfTasks = JSON.parse(tasks);
    
        for(let task of listOfTasks){
            this.createTask(task);
        }

        utils.completedTasks();
    }
}

//HTML variables
const inputTask = document.querySelector('#newtask input');
const btnTask = document.querySelector('#push');
const tasks = document.querySelector('#tasks');
const MAX_TEXT = 30;

const utils = new Utils();

