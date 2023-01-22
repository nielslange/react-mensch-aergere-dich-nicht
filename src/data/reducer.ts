import { initialState } from './state';
import TYPES from './action-types';
const { ROLL_DIE, SET_NOTICE, NEXT_PLAYER, MOVE_PEG } = TYPES;

const reducer = ( state = initialState, action: any ) => {
	switch ( action.type ) {
		case ROLL_DIE:
			return { ...state, die: action.die };

		case SET_NOTICE:
			return {
				...state,
				notice: {
					message: action.notice.message,
					type: action.notice.type,
				},
			};

		case NEXT_PLAYER:
			return { ...state, currentPlayer: action.player };

		case MOVE_PEG:
			return { ...state, pags: action.pegs };

		default:
			return state;
	}
};

export default reducer;
