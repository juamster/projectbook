import { ProjectService, projectService } from "../services/ProjectService.js"
import { STORE } from "../store.js";


// Private parts
function drawProjects() {
  let template = "";
  STORE.state.projects.forEach(project => {
    template += `
       <div class="project">
          <div onclick="app.projectController.viewProject('${project.id}')" class="project-name">
            ${project.name}
          </div>
       </div>    
    `;
  });
  document.getElementById("projects").innerHTML = template;
}

function drawContacts() {
  let project = STORE.state.activeProject;
  let template = "";
  STORE.state.contacts.forEach(contact => {
    if (project.id == contact.projectID) {
      template += ` 
       <div class="contacts">
          ${contact.projectID} ${contact.name} ${contact.phone} ${contact.email}
          <br>
       </div>    
    `;
    }
  });
  document.getElementById("contacts").innerHTML = template;
}

function drawProjectDetails() {
  let project = STORE.state.activeProject;
  if (!project.id) {
    return;
  }
  let template = `
    <h1 class="project-title" > ${project.name}</h1 >
      <p class="project-description">${project.description}</p>
  `;
  document.getElementById("projectDetails").innerHTML = template;

}

function drawGroups() {
  let project = STORE.state.activeProject;
  let template = "";
  STORE.state.groups.forEach(group => {
    if (project.id == group.projectID) {
      template += ` 
       <div class="group" style="background:${group.color}">
          ${group.projectID} ${group.name} 
          <br>
       </div>    
    `;
    }
  });
  document.getElementById("groups").innerHTML = template;
}

// the controllers job is to manage the view
// Public Parts 
export class ProjectController {
  constructor() {
    drawProjects();
    drawProjectDetails();

  }
  createProject() {
    event.preventDefault(); // stops page from reloading
    let form = event.target;
    try {
      // @ts-ignore
      projectService.createProject({
        name: form.projectName.value,
        description: form.projectDescription.value
      });
      // @ts-ignore
      form.reset();
      drawProjects();
    } catch (error) {
      alert(error);
    }
  }

  viewProject(projectID) {
    try {
      projectService.setActiveProject(projectID);
      drawProjectDetails();
      drawContacts();
    } catch (error) {
      alert(error);
    }
  }

  createContact() {
    event.preventDefault(); // stops page from reloading
    let form = event.target;
    let project = STORE.state.activeProject;
    if (!project.id) {
      return;
    }
    try {
      // @ts-ignore
      projectService.createContact({
        projectID: project.id,
        name: form.contactName.value,
        phone: form.contactPhone.value,
        email: form.contactEmail.value
      });
      // @ts-ignore
      form.reset();
      drawContacts();
    } catch (error) {
      alert(error);
    }
  }
  createGroup() {
    event.preventDefault(); // stops page from reloading
    let form = event.target;
    let project = STORE.state.activeProject;
    if (!project.id) {
      return;
    }
    try {
      // @ts-ignore
      projectService.createGroup({
        projectID: project.id,
        name: form.groupName.value,
        color: form.groupColor.value,

      });
      // @ts-ignore
      form.reset();
      drawGroups();
    } catch (error) {
      alert(error);
    }
  }


}


