import React from "react";
import NotesAppHeader from "./header/NotesAppHeader";
import NotesAppBody from "./body/NotesAppBody";
import {getInitialData} from "../utils/index.js"

class NotesApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            notes: getInitialData()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddHandler = this.onAddHandler.bind(this)
        this.onArchivedHandler = this.onArchivedHandler.bind(this)
    }


    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
    }

    onAddHandler({ title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id : +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: +new Date()
                    }
                ]
            }
        })
    }

    onArchivedHandler(id){
        const notes = this.state.notes.map((note) => note.id === id? {...note, archived: !note.archived}: note)
        this.setState({notes})
    }

    render(){
        return (
            <>
                <NotesAppHeader />
                <NotesAppBody notes={this.state.notes} onDelete={this.onDeleteHandler} onAdd={this.onAddHandler} onArchived={this.onArchivedHandler}/>
            
            </>
        )
    }
}

export default NotesApp