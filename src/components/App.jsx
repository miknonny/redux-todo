import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

const { Component } = React;

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      notes: []
    }
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.findNote = this.findNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote () {
    this.setState({
      notes: [...this.state.notes, {id: uuid.v4(), task: 'new task'}]
    })
  }

  editNote (id, task) {
    let notes = this.state.notes;
    const noteIndex = this.findNote(id);
    if (noteIndex < 0) {
      return;
    }
    notes[noteIndex].task = task;
    this.setState(notes);
  }

  findNote(id) {
    const notes = this.state.notes;
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex < 0) {
      console.warn('Failed to find note', note.id);
    }
    return noteIndex;
  }

  deleteNote (id) {
    const notes = this.state.notes;
    const noteIndex = this.findNote(id);

    if (noteIndex < 0) {
      return;
    }
    this.setState({
      notes: [
        ...notes.slice(0, noteIndex),
        ...notes.slice(noteIndex + 1)
      ]
    })
  }

  render () {
    const { notes } = this.state;
    return (
      <div>
        <h3>Kanban App</h3>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    )
  }
}
