import React, { Component } from 'react';

class ActivityStart extends Component {
    render(){
      <div class="btn-group">
        <div class="input-group">
            <input type="text" class="form-control" value={}>
            <span class="input-group-btn">
                <button data-loading-text="Starting..." class="btn btn-default" type="button" data-bind="'click-loading': startCommand">Start</button>
            </span>
        </div>
      </div>
    }
}

export default ActivityStart
