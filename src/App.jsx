import React from 'react';
import TabBar from './TabBar.jsx';
import MasterDetailView from './MasterDetailView.jsx';
import './App.css';

const TAB_DOWNLOAD = 0;
const TAB_UPLOAD = 1;
const TAB_SETTINGS = 2;

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		tab: TAB_DOWNLOAD,
		system: null
	};

	handleClickTabDownload = (event) => {
		this.setState({ tab: TAB_DOWNLOAD })
	};

	handleClickTabUpload = (event) => {
		this.setState({ tab: TAB_UPLOAD })
	}

	handleClickTabSettings = (event) => {
		this.setState({ tab: TAB_SETTINGS })
	}

	handleChangeSystem = (event) => {
		this.setState({ system: event.target.value })
	}

	render() {
		return (
			<div class='app'>
				<TabBar
					handleClickDownload={this.handleClickTabDownload}
					handleClickUpload = {this.handleClickTabUpload}
					handleClickSettings = {this.handleClickTabSettings} />

				<MasterDetailView
					selectedTab={this.state.tab}
					system={this.state.system} />
			</div>
		)
	}
}

export default App;
