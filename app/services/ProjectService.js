import { Project } from "../models/Project.js"
import { Contact } from "../models/Contacts.js"
import { Group } from "../models/Group.js"
import { STORE } from "../store.js";


// the services job is to control data access

export class ProjectService {
  setActiveProject(projectID) {
    // rule 1
    // query function
    let project = STORE.state.projects.find(p => p.id == projectID)

    // rule 2
    if (!project) {
      throw new Error("Invalid ID");
    }
    // TODO check project members 
    STORE.state.activeProject = project;
  }

  createProject(projectData) {

    if (STORE.state.projects.length >= 3) {
      throw new Error("Exceed Limit on free projects!!");
    }
    let project = new Project(projectData);
    STORE.state.projects.push(project);
  }

  createContact(contactData) {
    let contact = new Contact(contactData);
    STORE.state.contacts.push(contact);

  }

  createGroup(groupData) {
    let group = new Group(groupData);
    STORE.state.groups.push(group);

  }
}
export const projectService = new ProjectService();
