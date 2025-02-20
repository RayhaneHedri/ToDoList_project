// types/keycloak.d.ts
import { JwtPayload } from "jsonwebtoken";

export interface KeycloakTokenPayload extends JwtPayload {
  realm_access?: {
    roles?: string[];
  };
}
