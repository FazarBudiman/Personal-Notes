import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";


function NotesAppBody ({ notes, onDelete, onAdd, onArchived }) {
    const notesActive = notes.filter((note) => note.archived === false)
    const notesArchived = notes.filter((note) => note.archived === true)
    return (
        <div className="note-app__body">
            <NoteInput onAdd={onAdd} />
            <h2>Catatan Aktif</h2>
            {notesActive.length === 0 ? 
                <p className="notes-list__empty-message">Tidak ada catatan</p> :
                <NoteList notes={notesActive} archived={false} onDelete={onDelete} onArchived={onArchived} />
            }
            
            <h2>Arsip</h2>
            {notesArchived.length === 0 ? 
                <p className="notes-list__empty-message">Tidak ada catatan</p> : 
                <NoteList notes={notesArchived} archived={true} onDelete={onDelete} onArchived={onArchived} /> 
            }
            
        </div>
    )
}


export default NotesAppBody