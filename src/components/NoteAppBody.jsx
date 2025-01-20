import React from "react";

class NoteAppBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const title = event.target.value;
        this.setState({ title });
    }

    onBodyChangeEventHandler(event) {
        const body = event.target.value;
        this.setState({ body });
    }

    onSubmitChangeEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            body: '',
        });
    }

    render() {
        return (
            <div className="note-input">
                <form className="note-input" onSubmit={this.onSubmitChangeEventHandler}>
                    <h2 className="note-input__title">Buat catatan</h2>
                    <p className="note-input__title__char-limit">Sisa Karakter: {50 - this.state.title.length}</p>
                    <input className="note-input__title" type="text" placeholder="ini adalah judul..." maxLength='50' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteAppBody;