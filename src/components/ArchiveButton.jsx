import React from "react";

function ArchiveButton({id, archived, onArchived}){
    return(
        <button className="note-item__archive-button" onClick={() => onArchived(id)}>{archived ? 'Pindahkan' : 'Arsipkan'}</button>
    );
}

export default ArchiveButton;