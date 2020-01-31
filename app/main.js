import { ProjectController } from "./controllers/ProjectController.js";
//type ProjectController and then hit tab. don't forget the .js

// entry point
ProjectController

let count = 7;

class App {
  // container to hold all the things - only a single instance
  projectController = new ProjectController();

}

const APP = new App();
window["app"] = APP; // bracket notation, lets us adds to the Window object
