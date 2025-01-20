import React from "react";

class NoteAppHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        };

        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onSearchEventHandler(event) {
        const search = event.target.value;
        this.setState({ search });
        this.props.onSearch(search);
    }

    render() {
        return (
            <div className="note-app__header">
                <h1>Notes</h1>
                <form className="note-search">
                    <input type="text" placeholder="Cari catatan..." onChange={this.onSearchEventHandler} />
                </form>
            </div>
        );
    }
}

export default NoteAppHeader;