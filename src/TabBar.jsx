import React from 'react';

const TAB_DOWNLOAD = 0;
const TAB_UPLOAD = 1;
const TAB_SETTINGS = 2;

class TabBar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        tab: DOWNLOAD
    };

    handleClickDownload = (event) => {
        this.setState({tab: DOWNLOAD});
        this.props.handleClickDownload(event);
    }

    handleClickUpload = (event) => {
        this.setState({tab: UPLOAD})
        this.props.handleClickUpload(event);
    }

    handleClickSettings = (event) => {
        this.setState({tab: SETTINGS})
        this.props.handleClickSettings(event);
    }

    render() {
        return (
            <div class="tab-bar">
                <input type="image" src="assets/download.png" onClick={this.handleClickDownload()}/>
                <input type="image" src="assets/upload.png" onClick={this.handleClickUpload()}/>
                <input type="image" src="assets/settings.png" onClick={this.handleClickSettings()}/>
            </div>
        );
    }
}
