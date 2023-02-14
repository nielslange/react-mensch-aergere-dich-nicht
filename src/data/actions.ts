import { Player } from '../data/state';
import TYPES from './action-types';
const { ROLL_DIE, SET_NOTICE, NEXT_PLAYER, MOVE_PEG } = TYPES;

export const rollDie = () => {
	// const die = Math.floor( Math.random() * 6 ) + 1;
	const die = 6;

	return { type: ROLL_DIE, die };
};

export const setNotice = ( notice: any ) => {
	return { type: SET_NOTICE, notice };
};

export const nextPlayer = ( { currentPlayer }: { currentPlayer: Player } ) => {
	let player = '';
	switch ( currentPlayer ) {
		case 'yellow':
			player = 'green';
			break;
		case 'green':
			player = 'red';
			break;
		case 'red':
			player = 'blue';
			break;
		case 'blue':
			player = 'yellow';
			break;
	}

	return { type: NEXT_PLAYER, player };
};

export const movePeg = ( { pegs }: { pegs: any } ) => {
	return { type: MOVE_PEG, pegs };
};
