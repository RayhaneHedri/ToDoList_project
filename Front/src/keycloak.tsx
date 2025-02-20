import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  realm: "toDoList",
  url: "http://localhost:8080",
  clientId: "ToDoList_Front",
});

export default keycloak;