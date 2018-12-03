import React from 'react'
import './message_sidebar_button.css'

export class MessageSidebarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: this.props.active}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      this.setState({active: nextProps.active});
    }
  }

  render() {
    return (
      <button className={this.state.active ? 'conversation-button-active' : 'conversation-button'} onClick={(e) => this.props.callbackFunction(this.props.convID)}>
        <img className="conversation-picture" src={this.props.image} alt="did not load" />
        <div className="conversation-title">{this.props.title}</div>
      </button>
    );
  }
}
