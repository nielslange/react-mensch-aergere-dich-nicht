import { Provider } from 'react-redux';
import store from '../data/store';
import Board from './Board';
import Die from './Die';
import Players from './Players';
import './Game.scss';

const Game = () => {
	return (
		<div className="game">
			<Provider store={ store }>
				<div>
					<Board />
				</div>
				<div>
					<Die />
					<Players />
				</div>
			</Provider>
		</div>
	);
};

export default Game;
