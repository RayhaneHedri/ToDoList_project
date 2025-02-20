import Keycloak from 'keycloak-connect';
import expressSession from 'express-session';

const memoryStore = new expressSession.MemoryStore();

const keycloak = new Keycloak({
  store: memoryStore,
}, 'C:/Users/Rayhane/Desktop/PENTABELL/keycloak_back/back/keycloak.json');

export { keycloak, memoryStore };
