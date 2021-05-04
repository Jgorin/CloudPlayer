import LogInForm from "../LogInForm"
import { DELETE, POST } from "./Fetch"

export const login = (formPayload) => {
  return POST(`/users/sign_in`, {user: formPayload})
}