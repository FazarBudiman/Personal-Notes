import React from "react";

class NoteInput extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            maxCharTitle: 50,
            title: '',
            body: ''
        }

        this.onTitleChange = this.onTitleChange.bind(this)
        this.onBodyChange = this.onBodyChange.bind(this)
        this.onSubmitNotes = this.onSubmitNotes.bind(this)
    }

    onTitleChange(event) {
        const newTitle = event.target.value
        if (newTitle.length <= this.state.maxCharTitle) {
            this.setState(() => {
                return {
                    title: event.target.value
                }
            })    
        }
        
    }

    onBodyChange(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitNotes(event){
        event.preventDefault()
        this.props.onAdd(this.state)
        setTimeout(() => {
            this.setState(() => {
                return {
                    title: '',
                    body: ''
                }
            })
        }, 100);
    }

    render(){
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitNotes}>
                    <p className="note-input__title__char-limit">Sisa Karakter: {this.state.maxCharTitle - this.state.title.length}</p>
                    <input className="note-input__title" placeholder="Ini adalah Judul" onChange={this.onTitleChange} value={this.state.title} />
                    <textarea className="note-input__body" placeholder="Tuliskan catatanmu disini" onChange={this.onBodyChange} value={this.state.body} />
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput