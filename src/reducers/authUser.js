import { SET_AUTH_USER } from '../actions/authUser';

export default function authUser(state = null, action) {
  if (action.type === SET_AUTH_USER) {
    return action.id;
  }
  return state;
}
