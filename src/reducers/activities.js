
function activities(state = [], action){
  console.log(state, action);
  switch (action.type) {
    case 'RECEIVE_ACTIVITIES':
      return action.response;
    case 'START_ACTIVITY':
      return [...state, action.activity];
    default:
      return state;
  }
}

export default activities;
