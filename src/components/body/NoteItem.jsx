import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem ({ id, title, date, body, archived, onDelete, onArchived}) {
    return (
        <div className="note-item" id={id}>
            <NoteItemContent title={title} date={date} body={body} />
            <NoteItemAction archived={archived} onDelete={onDelete} onArchived={onArchived} id={id}/>
        </div>
    )
}

export default NoteItem