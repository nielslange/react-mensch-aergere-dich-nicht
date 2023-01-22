import { useSelector, useDispatch } from 'react-redux';
import { rollDie, nextPlayer } from '../data/actions';

const Players = () => {
	const dispatch = useDispatch();
	const currentPlayer = useSelector( ( state: any ) => state.currentPlayer );

	const handleNextPlayer = () => {
		dispatch( nextPlayer( { currentPlayer } ) );
		dispatch( rollDie() );
	};

	return (
		<div>
			<h2>Player.tsx</h2>

			<table>
				<tbody>
					<tr>
						<td>Current player</td>
						<td>:</td>
						<td>{ currentPlayer }</td>
					</tr>
				</tbody>
			</table>

			<button onClick={ handleNextPlayer }>Next player</button>
		</div>
	);
};

export default Players;
