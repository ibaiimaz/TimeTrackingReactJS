import React, { Component } from 'react';
import axios from 'axios';

import MomentWrapper from './momentWrapper.jsx'
import ActivityList from './activityList.component.jsx'
//import DataService from './dataService.js'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      lastRecord:null,
      canStartTracking:true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }
  /*state = {
    timeRecords:[],
    activity:"",
    lastRecord:null,
    canStartTracking:true
  };*/

  loadData(records){
    this.setState({
      timeRecords: records
    })
    if(records.length > 0){
      var lastRecordGot = records[0];
      this.setState({
        lastRecord: lastRecordGot,
        canStartTracking: false //lastRecordGot.IsCompleted
      })
    }
  };

  search(URL){
    axios({
      url: URL,
      responseType: 'json',
      auth: { username: 'user', password: 'user' },
      withCredentials: true
    }).then(response => { this.loadData(response.data) });
  };

  componentDidMount(){
    //DataService.getTimeRecords(10).then(response => { this.loadData(response.data) });
    const { fetchActivities } = this.props;
    fetchActivities();
    //DataService.getTimeRecords(10).then(response =>
    //  receiveActivities(response.data)
    //);
  };

  startCommand(){
    var newTimeRecord = {
      IsCompleted: false,
      Activity: this.state.activity
    };
  };

  endCommand(){

  };

  handleChange(event) {
    console.log(this);
			this.setState({activity: event.target.value})
		};

    handleStart(){
      this.props.startActivity({
        IsCompleted: false,
        Activity: this.state.activity,
        Id: 1000
      });
    }

  render(){
    var trackPosibleAction;
    console.log(this.props.lastRecord);
    if(this.state.canStartTracking){
      trackPosibleAction = (
        <div className="btn-group">
          <div className="input-group">
              <input type="text" className="form-control" value={this.state.activity} onChange={this.handleChange}></input>
              <span className="input-group-btn">
                  /*<button onClick={this.props.startActivity.bind(null, this.state.activity)} className="btn btn-default" type="button">Start</button>*/
                  <button onClick={this.handleStart} className="btn btn-default" type="button">Start</button>
              </span>
          </div>
        </div>
      );
    }
    else{
      trackPosibleAction = (
        <div>
          <div>
              <h2 style={{display: 'inline-block'}}><MomentWrapper date={this.state.lastRecord.Start} format='HH:mm:ss' /></h2>
              <h3>{this.state.lastRecord.Activity}</h3>
          </div>
          <button type="button" className="btn">End</button>
        </div>
      );
    }

    return (
      <div>
        <h1>Home</h1>
        {trackPosibleAction}
        <ActivityList timeRecords={this.props.activities} />
      </div>
    );
  };
}

export default Home
