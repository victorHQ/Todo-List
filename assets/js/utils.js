export default class Utils {

    //Dark Mode 
    darkMode(){
        const body = document.querySelector('body');
        const toggleDarkMode = document.querySelector('.toggle');
    
        toggleDarkMode.addEventListener('click', function(){
            body.classList.toggle('dark-mode')
        })

        this.completedTasks();
    }

    //Tasks Completed
    completedTasks(){
        const spanTasks = document.querySelectorAll('.taskname');
        for (let i = 0; i < spanTasks.length; i++) {
            spanTasks[i].addEventListener('click', function(){
                this.classList.toggle('completed');
            })
        }
    }

    countTasks(){
        let tasks = document.querySelectorAll('.task');

        const taskNumber = document.querySelector('#count');
        taskNumber.textContent = tasks.length;
    }
}