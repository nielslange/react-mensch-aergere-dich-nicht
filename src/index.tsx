import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.scss';
import Game from './components/Game';

const root = ReactDOM.createRoot(
	document.getElementById( 'root' ) as HTMLElement
);
root.render(
	<React.StrictMode>
		<Game />
	</React.StrictMode>
);
