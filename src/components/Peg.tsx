import { useSelector } from 'react-redux';
import classnames from 'classnames';
import './Peg.scss';

interface PegProps {
	id: number;
	player: string;
	yellow?: number;
	green?: number;
	red?: number;
	blue?: number;
}

const Peg = ( props: PegProps ) => {
	const die = useSelector( ( state: any ) => state.die );
	const currentPlayer = useSelector( ( state: any ) => state.currentPlayer );
	const { id, player, yellow, green, red, blue } = props;

	const handleClick = ( event: any ) => {
		console.log( event.target.dataset );
		const player = event.target.dataset.player;
		const yellow = event.target.dataset.yellow;
		const green = event.target.dataset.green;
		const red = event.target.dataset.red;
		const blue = event.target.dataset.blue;

		// If the peg is not owned by the current player, return a notice.
		if ( player !== currentPlayer ) {
			return alert( 'That peg is not yours!' );
		}

		// If the peg is in the homebase, it can only be moved if the die roll is a 6.
		if ( ( yellow === '0' || green === '0' || red === '0' || blue === '0' ) && die !== 6 ) {
			return alert( 'You must roll a 6 to move this peg!' );
		}

		// If the destination is occupied by an own peg, return a notice.

		// If the destination is occupied by an opponent peg, remove the opponent peg from the board.

		// If the destination would exceed the endzone, return a notice.

		// Move the peg to the destination.
	};

	return (
		<div
			className={ classnames( 'peg', player ) }
			key={ id }
			data-peg={ id }
			data-player={ player }
			data-yellow={ yellow }
			data-green={ green }
			data-red={ red }
			data-blue={ blue }
			onClick={ handleClick }
		></div>
	);
};

export default Peg;
