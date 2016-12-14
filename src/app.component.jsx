import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import Main from './main.component.jsx';

function mapStateToProps(state){
  var activities = state.activities;
  var lastRecordGot;
  if(activities.length > 0) {
    lastRecordGot = activities[0];
  }
  
  return {
    activities: state.activities,
    lastRecord: lastRecordGot,
    canStartTracking: false //lastRecordGot.IsCompleted
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
