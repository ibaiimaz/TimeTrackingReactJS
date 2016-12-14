import React, { Component } from 'react';

class ActivityList extends Component {
    render(){
      var resultItems =this.props.timeRecords.map(timeRecord => (
          <tr key={timeRecord.Id}>
            <td>{timeRecord.DurationStr}</td>
            <td>{timeRecord.Activity}</td>
          </tr>
        )
      );

      return (
        <table className='table table-condensed table-hover'>
          <thead>
            <tr>
              <th>Duration</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {resultItems}
          </tbody>
        </table>);
    }
}

export default ActivityList
