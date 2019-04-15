import { getInitialData } from '../utils/api';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';

export function handleInitialData() {
  return dispatch => {
    return getInitialData.then(({ users, questions }) => {
      console.log('users', users);
      console.log('questions', questions);
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
}
