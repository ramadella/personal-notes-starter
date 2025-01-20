import React from "react";
import { getInitialData } from '../utils/index';
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import NotesList from "./NotesList";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            filteredNotes: getInitialData(),
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onSearchHandler(title) {
        const filteredNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(title.toLowerCase()));
        this.setState({ filteredNotes });
    }

    onDeleteHandler(id) {
        this.setState((prevState) => {
            const notes = prevState.notes.filter((note) => note.id !== id);
            return {
                notes,
                filteredNotes: notes
            };
        });
    }

    onArchivedHandler(id) {
        this.setState((prevState) => {
            const archiveNote = prevState.notes.map((note) => note.id === id ? { ...note, archived: !note.archived } : note);
            return {
                notes: archiveNote,
                filteredNotes: archiveNote
            };
        });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevNote) => {

            const newNotes = [
                ...prevNote.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                    createdAt: new Date().toISOString(),
                    archived: false
                },

            ];

            return {
                notes: newNotes,
                filteredNotes: newNotes,
            }

        });
    }

    render() {
        const activeNotes = this.state.filteredNotes.filter((note) => !note.archived);
        const archivedNotes = this.state.filteredNotes.filter((note) => note.archived);
        return (
            <div>
                <NoteAppHeader onSearch={this.onSearchHandler} />
                <NoteAppBody addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NotesList notes={activeNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} />
                <h2>Arsip</h2>
                <NotesList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} />
            </div>
        );
    }
}

export default NoteApp;