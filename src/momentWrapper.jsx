import React from 'react';
import moment from 'moment';

class MomentWrapper extends React.Component {

  static propTypes = {
    date: React.PropTypes.any,
    format: React.PropTypes.string
  };

  static defaultProps = {
    date: new Date(),
    format: 'MMMM Do YYYY, h:mm:ss'
  };

  render() {
    const date = moment(this.props.date).format(this.props.format);
    return <span>{date}</span>
  }
};

export default MomentWrapper
