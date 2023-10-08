import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, archived, onDelete, onArchived }){
    return (
        <div className="notes-list">
            {notes.map((notes) => (
                        <NoteItem 
                            key={notes.id} 
                            id={notes.id} 
                            title={notes.title} 
                            body={notes.body} 
                            date={notes.createdAt} 
                            archived={notes.archived} 
                            onDelete={onDelete} 
                            onArchived={onArchived}
                        />    
                    )
                    
            )}
        </div>
    )
}


export default NoteList