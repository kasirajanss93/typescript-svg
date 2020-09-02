import React from 'react';

import '../styles/index.css';
import rectangle from './rectangle.svg';


export interface IAppProps {}

export interface IAppState {
	readonly Vehicle: IVehicle;
}

class App extends React.PureComponent<IAppProps, IAppState> {
	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<img src={rectangle} alt="" />
			</div>
		);
	}
}

export default App;