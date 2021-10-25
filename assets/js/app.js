import Main from "./main.js";
import Utils from "./utils.js";

class App{
    initTodoList(){
        utils.darkMode();
        main.submitTask();
        main.deleteAllTasks();
        main.deleteTask();
        main.addSavedTasks();
    }
}

const main = new Main();
const utils = new Utils();
const app = new App();

app.initTodoList();
