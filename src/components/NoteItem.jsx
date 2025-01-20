import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import { showFormattedDate } from "../utils";


function NoteItem({id, title, body, createdAt, archived, onDelete, onArchived}){
    return(
        <div className="note-item ">
            <div className="note-item__content">
                <h2 className="note-item__title">{title}</h2>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArchiveButton id={id} archived={archived} onArchived={onArchived}/>
            </div>
        </div>
    );
}

export default NoteItem;