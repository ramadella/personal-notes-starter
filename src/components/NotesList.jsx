import React from "react";
import NoteItem from "./NoteItem";
function NotesList({ notes, archived ,onDelete, onArchived }) {
    if (notes.length === 0) {
        return <p className="notes-list__empty-message">Tidak ada catatan</p>
    }
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    archived={note.archived}
                    createdAt={note.createdAt}
                    onDelete={onDelete}
                    onArchived={onArchived}
                    {...note}
                />
            ))
            }
        </div>
    );
}
export default NotesList;