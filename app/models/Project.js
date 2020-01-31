export class Project {

  // the id=generateID() only makes an ID if one doesn't come in
  constructor({ name, description, id = generateID() }) {
    this.name = name;
    this.id = id;
    this.description = description;
  }
}

function generateID() {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOP";
  var characterLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characterLength));
  }
  return result;
}