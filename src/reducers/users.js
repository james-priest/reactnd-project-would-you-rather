import { RECEIVE_USERS, ADD_ANSWER_TO_USER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_ANSWER_TO_USER:
      const { authUser, qid, answer } = action;
      // console.log('user reducer state', state);

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer
          }
        }
      };
    default:
      return state;
  }
}
