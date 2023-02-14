export const isOwnPeg = ( {
	player,
	currentPlayer,
}: {
	player: string;
	currentPlayer: string;
} ) => {
	return player === currentPlayer;
};

export const isHomePeg = ( {
	yellow,
	green,
	red,
	blue,
}: {
	yellow: string;
	green: string;
	red: string;
	blue: string;
} ) => {
	return yellow === '0' || green === '0' || red === '0' || blue === '0';
};

export const shouldAddPeg = ( { die }: { die: number } ) => {
	return die === 6;
};

export const isStartOccupiedBySamePlayer = ( {
	currentPlayer,
	pegs,
}: {
	currentPlayer: string;
	pegs: any;
} ) => {
	switch ( currentPlayer ) {
		case 'yellow':
			return pegs.filter( ( peg: any ) => peg.field.yellow === 1 ).length;
		case 'green':
			return pegs.filter( ( peg: any ) => peg.field.green === 1 ).length;
		case 'red':
			return pegs.filter( ( peg: any ) => peg.field.red === 1 ).length;
		case 'blue':
			return pegs.filter( ( peg: any ) => peg.field.blue === 1 ).length;
	}
};

export const isStartOccupiedByOtherPlayer = ( {
	currentPlayer,
	pegs,
}: {
	currentPlayer: string;
	pegs: any;
} ) => {
	switch ( currentPlayer ) {
		case 'yellow':
			return pegs.filter(
				( peg: any ) =>
					peg.field.green === 1 ||
					peg.field.red === 1 ||
					peg.field.blue === 1
			).length;
		case 'green':
			return pegs.filter(
				( peg: any ) =>
					peg.field.red === 1 ||
					peg.field.bue === 1 ||
					peg.field.yellow === 1
			).length;
		case 'red':
			return pegs.filter(
				( peg: any ) =>
					peg.field.blue === 1 ||
					peg.field.yellow === 1 ||
					peg.field.green === 1
			).length;
		case 'blue':
			return pegs.filter(
				( peg: any ) =>
					peg.field.yellow === 1 ||
					peg.field.green === 1 ||
					peg.field.red === 1
			).length;
	}
};

export const hasPegsOnHome = ( {
	currentPlayer,
	pegs,
}: {
	currentPlayer: string;
	pegs: any;
} ) => {
	switch ( currentPlayer ) {
		case 'yellow':
			return pegs.filter( ( peg: any ) => peg.field.yellow === 0 ).length;
		case 'green':
			return pegs.filter( ( peg: any ) => peg.field.green === 0 ).length;
		case 'red':
			return pegs.filter( ( peg: any ) => peg.field.red === 0 ).length;
		case 'blue':
			return pegs.filter( ( peg: any ) => peg.field.blue === 0 ).length;
	}
};
