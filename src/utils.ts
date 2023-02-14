import {
	isHomePeg,
	isStartOccupiedBySamePlayer,
	isStartOccupiedByOtherPlayer,
	hasPegsOnHome,
} from './data/selectors';

const getGameStateCode = ( {
	player,
	currentPlayer,
	die,
	yellow,
	green,
	red,
	blue,
	pegs,
}: {
	player: any;
	currentPlayer: any;
	die: number;
	yellow: any;
	green: any;
	red: any;
	blue: any;
	pegs: any;
} ) => {
	if ( currentPlayer !== player ) {
		return 10000;
	}

	if ( currentPlayer === player ) {
		if ( isHomePeg( { yellow, green, red, blue } ) ) {
			if ( die === 6 ) {
				if ( isStartOccupiedBySamePlayer( { currentPlayer, pegs } ) ) {
					return 21110;
				}

				if ( isStartOccupiedByOtherPlayer( { currentPlayer, pegs } ) ) {
					return 21120;
				}

				return 21130;
			} else {
				return 21200;
			}
		} else {
			if ( die === 6 ) {
				if ( hasPegsOnHome( { currentPlayer, pegs } ) ) {
					if (
						isStartOccupiedByOtherPlayer( { currentPlayer, pegs } )
					) {
						return 22111;
					}

					if (
						! isStartOccupiedBySamePlayer( {
							currentPlayer,
							pegs,
						} ) &&
						! isStartOccupiedByOtherPlayer( {
							currentPlayer,
							pegs,
						} )
					) {
						return 22112;
					}

					return 22113;
				}
			} else {
			}
		}
	}
};

export default getGameStateCode;
