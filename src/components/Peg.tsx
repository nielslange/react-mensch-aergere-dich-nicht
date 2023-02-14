import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { movePeg, setNotice } from '../data/actions';
import {
	isOwnPeg,
	isHomePeg,
	isStartOccupiedBySamePlayer,
} from '../data/selectors';
import getGameStateCode from '../utils';

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
	const dispatch = useDispatch();
	const die = useSelector( ( state: any ) => state.die );
	const pegs = useSelector( ( state: any ) => state.pegs );
	const currentPlayer = useSelector( ( state: any ) => state.currentPlayer );
	const { id, player, yellow, green, red, blue } = props;

	const handleClick = ( event: any ) => {
		const player = event.target.dataset.player;
		const yellow = event.target.dataset.yellow;
		const green = event.target.dataset.green;
		const red = event.target.dataset.red;
		const blue = event.target.dataset.blue;
		const peg = event.target.dataset.peg;
		const newPegs = JSON.parse( JSON.stringify( pegs ) );
		const code = getGameStateCode( {
			player,
			currentPlayer,
			die,
			yellow,
			green,
			red,
			blue,
			pegs,
		} ) as number;

		console.log( code );

		switch ( code ) {
			/**
			 * CODE: 10000
			 * NOTE: CURRENT_PEG belongs to the OTHER_PLAYER
			 * TYPE: ERROR
			 * NOTICE: This is not your CURRENT_PEG.
			 */
			case 10000:
				return dispatch(
					setNotice( {
						type: 'error',
						message: 'This is not your peg!',
					} )
				);

			/**
			 * CODE: 21100
			 * NOTE: CURRENT_PEG belongs to the CURRENT_PLAYER &&
			 * 		 CURRENT_PEG stands on HOME &&
			 * 		 CURRENT_PLAYER rolled a 6 &&
			 * 		 The start field is occupied by the CURRENT_PLAYER
			 * TYPE: ERROR
			 * NOTICE: HOME is occupied by your CURRENT_PEG.
			 */
			case 2110:
				// return dispatch( setNotice( { type: 'error', message: 'Cannot add peg to the board as the start field is occupied!', } ) );
				return;

			/**
			 * CODE: 21120
			 * NOTE: CURRENT_PEG belongs to the CURRENT_PLAYER &&
			 * 		 CURRENT_PEG stands on HOME &&
			 * 		 CURRENT_PLAYER rolled a 6 &&
			 * 		 The start field is occupied by the OTHER_PLAYER
			 * ACTION: Hit OTHER_PEG, move CURRENT_PEG to the board
			 * TYPE: SUCCESS
			 * NOTICE: Hit CURRENT_PEG x and move CURRENT_PEG x to the board.
			 */
			case 21120:
				// return dispatch( setNotice( { type: 'success', message: 'Hit CURRENT_PEG x and move CURRENT_PEG x to the board.', } ) );
				return;

			/**
			 * CODE: 21130
			 * NOTE: CURRENT_PEG belongs to the CURRENT_PLAYER &&
			 * 		 CURRENT_PEG stands on HOME &&
			 * 		 CURRENT_PLAYER rolled a 6 &&
			 * 		 The start field is empty
			 * ACTION: Move CURRENT_PEG to the board
			 * TYPE: SUCCESS
			 * NOTICE: Move CURRENT_PEG x to the board.
			 */
			case 21130:
				// switch ( player ) { case 'yellow': newPegs[ peg - 1 ].field.yellow = 1; break; case 'green': newPegs[ peg - 1 ].field.green = 1; break; case 'red': newPegs[ peg - 1 ].field.red = 1; break; case 'blue': newPegs[ peg - 1 ].field.blue = 1; break; }
				// dispatch( movePeg( { pegs: newPegs } ) );
				// dispatch( setNotice( { type: 'success', message: 'Move CURRENT_PEG x to the board.', } ) );
				return;

			/**
			 * CODE: 21200
			 * NOTE: CURRENT_PLAYER did not roll a 6
			 * TYPE: ERROR
			 * NOTICE: Moving a CURRENT_PEG to the board requires a 6.
			 */
			case 21200:
				return;

			case 99999:
				return '🥦';
		}

		if (
			die === 6 &&
			isHomePeg( { yellow, green, red, blue } ) &&
			! isStartOccupiedBySamePlayer( { currentPlayer, pegs } )
		) {
			switch ( player ) {
				case 'yellow':
					newPegs[ peg - 1 ].field.yellow = 1;
					break;
				case 'green':
					newPegs[ peg - 1 ].field.green = 1;
					break;
				case 'red':
					newPegs[ peg - 1 ].field.red = 1;
					break;
				case 'blue':
					newPegs[ peg - 1 ].field.blue = 1;
					break;
			}

			dispatch( movePeg( { pegs: newPegs } ) );
			dispatch(
				setNotice( {
					type: 'success',
					message: 'Moving this peg to the board!',
				} )
			);

			return;
		}

		switch ( player ) {
			case 'yellow':
				newPegs[ peg - 1 ].field.yellow += die;
				break;
			case 'green':
				newPegs[ peg - 1 ].field.green += die;
				break;
			case 'red':
				newPegs[ peg - 1 ].field.red += die;
				break;
			case 'blue':
				newPegs[ peg - 1 ].field.blue += die;
				break;
		}

		dispatch( movePeg( { pegs: newPegs } ) );
		dispatch(
			setNotice( {
				type: 'success',
				message: 'Moving this peg on the board!',
			} )
		);
		return;
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
