import React from 'react';

const { Component } = React;

export default class Note extends Component {
  constructor (props) {
    super(props);

    this.state = {
      editing: true,
    };

    this.finishEdit = this.finishEdit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.edit = this.edit.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.renderTask = this.renderTask.bind(this);
  }

  checkEnter (e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  edit () {
    this.setState({
      editing: true
    })
  }
  
  finishEdit (e) {
    this.props.onEdit(e.target.value);
    this.setState({
      editing: false
    })
  }

  renderDelete () {
    return <button className="delete" onClick={this.props.onDelete}>x</button>
  }

  renderTask () {
    const onDelete = this.props.onDelete;
    //debugger;
    return (
      <div onClick={this.edit}>
        <span className="task">{this.props.task}</span>
        {onDelete ? this.renderDelete() : null}
      </div>
    );
  }

  renderEdit () {
    return <input type="text"
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}/>
  }

  render () {
    const editing = this.state.editing
    return (
      <div>
        {editing ? this.renderEdit() : this.renderTask()}
      </div>
    )
  }
}
