export type Player = 'YELLOW' | 'GREEN' | 'RED' | 'BLUE';

interface State {
	notice: {
		message: string;
		type: 'error' | 'success';
	};
	die: number;
	currentPlayer: Player;
	pegs: {
		id: number;
		player: Player;
		field: number;
	}[];
}

export const initialState: State = {
	notice: {
		message: '🐈 🐈 🐈',
		type: 'success',
	},
	die: 0,
	currentPlayer: 'YELLOW',
	pegs: [
		{ id: 1, player: 'YELLOW', field: 0 },
		{ id: 2, player: 'YELLOW', field: 0 },
		{ id: 3, player: 'YELLOW', field: 0 },
		{ id: 4, player: 'YELLOW', field: 0 },
		{ id: 5, player: 'GREEN', field: 0 },
		{ id: 6, player: 'GREEN', field: 0 },
		{ id: 7, player: 'GREEN', field: 0 },
		{ id: 8, player: 'GREEN', field: 0 },
		{ id: 9, player: 'RED', field: 0 },
		{ id: 10, player: 'RED', field: 0 },
		{ id: 11, player: 'RED', field: 0 },
		{ id: 12, player: 'RED', field: 0 },
		{ id: 13, player: 'BLUE', field: 0 },
		{ id: 14, player: 'BLUE', field: 0 },
		{ id: 15, player: 'BLUE', field: 0 },
		{ id: 16, player: 'BLUE', field: 0 },
	],
};
