import * as api from '../dataService';
import DataService from '../dataService.js'

function receiveActivities(response){
  console.log("receiveActivities" + response);
  return {
    type: 'RECEIVE_ACTIVITIES',
    response
  }
}

export const fetchActivities = () => {
  console.log(DataService);
  return DataService.getTimeRecords(10).then(response =>
    receiveActivities(response.data)
  )
};

export function startActivity(activity){
  console.log("startActivity " + activity);
  return {
    type: 'START_ACTIVITY',
    activity
  }
}

/*export const startActivity = (activity) => (dispatch) =>
  DataService.setTimeRecord(activity).then(response => {
    dispatch({
      type: 'START_ACTIVITY',
      activity
    });
  });*/

export function endActivity(activityId){
  return {
    type: 'END_ACTIVITY',
    activityId
  }
}
