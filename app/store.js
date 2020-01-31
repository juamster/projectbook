import { Project } from "./models/Project.js";

// a single store - singleton

class Store {
  state = {
    projects: [
      new Project({ id: "8", name: "P1", description: "this is P1" }),
      new Project({ id: "abc", name: "P2", description: "this is P2" })
    ],
    activeProject: new Project({
      name: "starter",
      description: "if you click away from me I will never return"
    }),
    contacts: [

    ],
    groups: [

    ]
  };
}

// this will make only one store.  The first time it is called it will make a new
// every other time, it will be the same store 
export const STORE = new Store();
