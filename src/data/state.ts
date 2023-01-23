export type Player = 'yellow' | 'green' | 'red' | 'blue';

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
		field?: {
			initial?: number;
			yellow?: number;
			green?: number;
			red?: number;
			blue?: number;
		};
	}[];
	fields: {
		id: number;
		className: string;
		field?: {
			yellow?: number;
			green?: number;
			red?: number;
			blue?: number;
		};
	}[];
}

export const initialState: State = {
	notice: {
		message: '🐈 🐈 🐈',
		type: 'success',
	},
	die: Math.floor( Math.random() * 6 ) + 1,
	currentPlayer: 'yellow',
	pegs: [
		{ id: 1, player: 'yellow', field: { initial: 1, yellow: 2 } },
		{ id: 2, player: 'yellow', field: { initial: 2, yellow: 0 } },
		{ id: 3, player: 'yellow', field: { initial: 12, yellow: 0 } },
		{ id: 4, player: 'yellow', field: { initial: 13, yellow: 0 } },
		{ id: 5, player: 'green', field: { initial: 10, green: 0 } },
		{ id: 6, player: 'green', field: { initial: 11, green: 0 } },
		{ id: 7, player: 'green', field: { initial: 21, green: 0 } },
		{ id: 8, player: 'green', field: { initial: 22, green: 0 } },
		{ id: 9, player: 'red', field: { initial: 109, red: 0 } },
		{ id: 10, player: 'red', field: { initial: 110, red: 0 } },
		{ id: 11, player: 'red', field: { initial: 120, red: 0 } },
		{ id: 12, player: 'red', field: { initial: 121, red: 0 } },
		{ id: 13, player: 'blue', field: { initial: 100, blue: 14 } },
		{ id: 14, player: 'blue', field: { initial: 101, blue: 0 } },
		{ id: 15, player: 'blue', field: { initial: 111, blue: 0 } },
		{ id: 16, player: 'blue', field: { initial: 112, blue: 0 } },
	],
	fields: [
		{ id: 1, className: 'board-cell circle yellow', field: { yellow: 0 } },
		{ id: 2, className: 'board-cell circle yellow', field: { yellow: 0 } },
		{ id: 3, className: 'board-cell' },
		{ id: 4, className: 'board-cell' },
		{
			id: 5,
			className: 'board-cell circle',
			field: { yellow: 9, blue: 19, red: 29, green: 39 },
		},
		{
			id: 6,
			className: 'board-cell circle',
			field: { yellow: 10, blue: 20, red: 30, green: 40 },
		},
		{
			id: 7,
			className: 'board-cell circle green',
			field: { yellow: 11, green: 1, blue: 21, red: 31 },
		},
		{ id: 8, className: 'board-cell' },
		{ id: 9, className: 'board-cell' },
		{ id: 10, className: 'board-cell circle green', field: { green: 0 } },
		{ id: 11, className: 'board-cell circle green', field: { green: 0 } },

		{ id: 12, className: 'board-cell circle yellow', field: { yellow: 0 } },
		{ id: 13, className: 'board-cell circle yellow', field: { yellow: 0 } },
		{ id: 14, className: 'board-cell' },
		{ id: 15, className: 'board-cell' },
		{
			id: 16,
			className: 'board-cell circle',
			field: { yellow: 8, blue: 18, red: 28, green: 38 },
		},
		{ id: 17, className: 'board-cell circle green', field: { green: 41 } },
		{
			id: 18,
			className: 'board-cell circle',
			field: { yellow: 12, blue: 22, red: 32, green: 2 },
		},
		{ id: 19, className: 'board-cell' },
		{ id: 20, className: 'board-cell' },
		{ id: 21, className: 'board-cell circle green', field: { green: 0 } },
		{ id: 22, className: 'board-cell circle green', field: { green: 0 } },

		{ id: 23, className: 'board-cell' },
		{ id: 24, className: 'board-cell' },
		{ id: 25, className: 'board-cell' },
		{ id: 26, className: 'board-cell' },
		{
			id: 27,
			className: 'board-cell circle',
			field: { yellow: 7, blue: 17, red: 27, green: 37 },
		},
		{ id: 28, className: 'board-cell circle green', field: { green: 42 } },
		{
			id: 29,
			className: 'board-cell circle',
			field: { yellow: 13, blue: 23, red: 33, green: 3 },
		},
		{ id: 30, className: 'board-cell' },
		{ id: 31, className: 'board-cell' },
		{ id: 32, className: 'board-cell' },
		{ id: 33, className: 'board-cell' },

		{ id: 34, className: 'board-cell' },
		{ id: 35, className: 'board-cell' },
		{ id: 36, className: 'board-cell' },
		{ id: 37, className: 'board-cell' },
		{
			id: 38,
			className: 'board-cell circle',
			field: { yellow: 6, blue: 16, red: 26, green: 36 },
		},
		{ id: 39, className: 'board-cell circle green', field: { green: 43 } },
		{
			id: 40,
			className: 'board-cell circle',
			field: { yellow: 14, blue: 24, red: 34, green: 4 },
		},
		{ id: 41, className: 'board-cell' },
		{ id: 42, className: 'board-cell' },
		{ id: 43, className: 'board-cell' },
		{ id: 44, className: 'board-cell' },

		{
			id: 45,
			className: 'board-cell circle yellow',
			field: { yellow: 1, blue: 11, red: 21, green: 31 },
		},
		{
			id: 46,
			className: 'board-cell circle',
			field: { yellow: 2, blue: 12, red: 22, green: 32 },
		},
		{
			id: 47,
			className: 'board-cell circle',
			field: { yellow: 3, blue: 13, red: 23, green: 33 },
		},
		{
			id: 48,
			className: 'board-cell circle',
			field: { yellow: 4, blue: 14, red: 24, green: 34 },
		},
		{
			id: 49,
			className: 'board-cell circle',
			field: { yellow: 5, blue: 15, red: 25, green: 35 },
		},
		{ id: 50, className: 'board-cell circle green', field: { green: 44 } },
		{
			id: 51,
			className: 'board-cell circle',
			field: { yellow: 15, blue: 25, red: 35, green: 5 },
		},
		{
			id: 52,
			className: 'board-cell circle',
			field: { yellow: 16, blue: 26, red: 36, green: 6 },
		},
		{
			id: 53,
			className: 'board-cell circle',
			field: { yellow: 17, blue: 27, red: 37, green: 7 },
		},
		{
			id: 54,
			className: 'board-cell circle',
			field: { yellow: 18, blue: 28, red: 38, green: 8 },
		},
		{
			id: 55,
			className: 'board-cell circle',
			field: { yellow: 19, blue: 29, red: 39, green: 9 },
		},

		{
			id: 56,
			className: 'board-cell circle',
			field: { yellow: 40, blue: 10, red: 20, green: 30 },
		},
		{
			id: 57,
			className: 'board-cell circle yellow',
			field: { yellow: 41 },
		},
		{
			id: 58,
			className: 'board-cell circle yellow',
			field: { yellow: 42 },
		},
		{
			id: 59,
			className: 'board-cell circle yellow',
			field: { yellow: 43 },
		},
		{
			id: 60,
			className: 'board-cell circle yellow',
			field: { yellow: 44 },
		},
		{ id: 61, className: 'board-cell' },
		{ id: 62, className: 'board-cell circle red', field: { red: 44 } },
		{ id: 63, className: 'board-cell circle red', field: { red: 43 } },
		{ id: 64, className: 'board-cell circle red', field: { red: 42 } },
		{ id: 65, className: 'board-cell circle red', field: { red: 41 } },
		{
			id: 66,
			className: 'board-cell circle',
			field: { yellow: 20, blue: 30, red: 40, green: 10 },
		},

		{
			id: 67,
			className: 'board-cell circle',
			field: { yellow: 39, blue: 9, red: 19, green: 29 },
		},
		{
			id: 68,
			className: 'board-cell circle',
			field: { yellow: 38, blue: 8, red: 18, green: 28 },
		},
		{
			id: 69,
			className: 'board-cell circle',
			field: { yellow: 37, blue: 7, red: 17, green: 27 },
		},
		{
			id: 70,
			className: 'board-cell circle',
			field: { yellow: 36, blue: 6, red: 16, green: 26 },
		},
		{
			id: 71,
			className: 'board-cell circle',
			field: { yellow: 35, blue: 5, red: 15, green: 25 },
		},
		{ id: 72, className: 'board-cell circle blue', field: { blue: 44 } },
		{
			id: 73,
			className: 'board-cell circle',
			field: { yellow: 25, blue: 35, red: 5, green: 15 },
		},
		{
			id: 74,
			className: 'board-cell circle',
			field: { yellow: 24, blue: 34, red: 4, green: 14 },
		},
		{
			id: 75,
			className: 'board-cell circle',
			field: { yellow: 23, blue: 33, red: 3, green: 13 },
		},
		{
			id: 76,
			className: 'board-cell circle',
			field: { yellow: 22, blue: 32, red: 2, green: 12 },
		},
		{
			id: 77,
			className: 'board-cell circle red',
			field: { yellow: 21, blue: 31, red: 1, green: 11 },
		},

		{ id: 78, className: 'board-cell' },
		{ id: 79, className: 'board-cell' },
		{ id: 80, className: 'board-cell' },
		{ id: 81, className: 'board-cell' },
		{
			id: 82,
			className: 'board-cell circle',
			field: { yellow: 34, blue: 4, red: 14, green: 24 },
		},
		{ id: 83, className: 'board-cell circle blue', field: { blue: 43 } },
		{
			id: 84,
			className: 'board-cell circle',
			field: { yellow: 26, blue: 36, red: 6, green: 16 },
		},
		{ id: 85, className: 'board-cell' },
		{ id: 86, className: 'board-cell' },
		{ id: 87, className: 'board-cell' },
		{ id: 88, className: 'board-cell' },

		{ id: 89, className: 'board-cell' },
		{ id: 90, className: 'board-cell' },
		{ id: 91, className: 'board-cell' },
		{ id: 92, className: 'board-cell' },
		{
			id: 93,
			className: 'board-cell circle',
			field: { yellow: 33, blue: 3, red: 13, green: 23 },
		},
		{ id: 94, className: 'board-cell circle blue', field: { blue: 42 } },
		{
			id: 95,
			className: 'board-cell circle',
			field: { yellow: 27, blue: 37, red: 7, green: 17 },
		},
		{ id: 96, className: 'board-cell' },
		{ id: 97, className: 'board-cell' },
		{ id: 98, className: 'board-cell' },
		{ id: 99, className: 'board-cell' },

		{ id: 100, className: 'board-cell circle blue', field: { blue: 0 } },
		{ id: 101, className: 'board-cell circle blue', field: { blue: 0 } },
		{ id: 102, className: 'board-cell' },
		{ id: 103, className: 'board-cell' },
		{
			id: 104,
			className: 'board-cell circle',
			field: { yellow: 32, blue: 2, red: 12, green: 22 },
		},
		{ id: 105, className: 'board-cell circle blue', field: { blue: 41 } },
		{
			id: 106,
			className: 'board-cell circle',
			field: { yellow: 28, blue: 38, red: 8, green: 18 },
		},
		{ id: 107, className: 'board-cell' },
		{ id: 108, className: 'board-cell' },
		{ id: 109, className: 'board-cell circle red', field: { red: 0 } },
		{ id: 110, className: 'board-cell circle red', field: { red: 0 } },

		{ id: 111, className: 'board-cell circle blue', field: { blue: 0 } },
		{ id: 112, className: 'board-cell circle blue', field: { blue: 0 } },
		{ id: 113, className: 'board-cell' },
		{ id: 114, className: 'board-cell' },
		{
			id: 115,
			className: 'board-cell circle blue',
			field: { yellow: 31, blue: 1, red: 11, green: 21 },
		},
		{
			id: 116,
			className: 'board-cell circle',
			field: { yellow: 30, blue: 40, red: 10, green: 20 },
		},
		{
			id: 117,
			className: 'board-cell circle',
			field: { yellow: 29, blue: 39, red: 9, green: 19 },
		},
		{ id: 118, className: 'board-cell' },
		{ id: 119, className: 'board-cell' },
		{ id: 120, className: 'board-cell circle red', field: { red: 0 } },
		{ id: 121, className: 'board-cell circle red', field: { red: 0 } },
	],
};
