import Peg from './Peg';
import './Board.scss';

function Game() {
	const handleClick = ( event: any ) => {
		console.log( event.target );
	};

	return (
		<div className="board">
			<div className="board-row">
				<div
					className="board-cell circle yellow"
					onClick={ handleClick }
				>
					<Peg color="yellow" id={ 1 } />
				</div>
				<div
					className="board-cell circle yellow"
					onClick={ handleClick }
				>
					<Peg color="yellow" id={ 2 } />
				</div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 9 }
					data-field-blue={ 19 }
					data-field-red={ 29 }
					data-field-green={ 39 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 10 }
					data-field-blue={ 20 }
					data-field-red={ 30 }
					data-field-green={ 40 }
				></div>
				<div
					className="board-cell circle green"
					onClick={ handleClick }
					data-field-yellow={ 11 }
					data-field-blue={ 21 }
					data-field-red={ 31 }
					data-field-green={ 1 }
				></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div
					className="board-cell circle green"
					onClick={ handleClick }
				>
					<Peg color="green" id={ 5 } />
				</div>
				<div
					className="board-cell circle green"
					onClick={ handleClick }
				>
					<Peg color="green" id={ 6 } />
				</div>
			</div>

			<div className="board-row">
				<div
					className="board-cell circle yellow"
					onClick={ handleClick }
				>
					<Peg color="yellow" id={ 3 } />
				</div>
				<div
					className="board-cell circle yellow"
					onClick={ handleClick }
				>
					<Peg color="yellow" id={ 4 } />
				</div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 8 }
					data-field-blue={ 18 }
					data-field-red={ 28 }
					data-field-green={ 38 }
				></div>
				<div
					className="board-cell circle green"
					onClick={ handleClick }
					data-field-green={ 41 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 12 }
					data-field-blue={ 22 }
					data-field-red={ 32 }
					data-field-green={ 2 }
				></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div
					className="board-cell circle green"
					onClick={ handleClick }
				>
					<Peg color="green" id={ 7 } />
				</div>
				<div
					className="board-cell circle green"
					onClick={ handleClick }
				>
					<Peg color="green" id={ 8 } />
				</div>
			</div>

			<div className="board-row">
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 7 }
					data-field-blue={ 17 }
					data-field-red={ 27 }
					data-field-green={ 37 }
				></div>
				<div
					className="board-cell circle green"
					onClick={ handleClick }
					data-field-green={ 42 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 13 }
					data-field-blue={ 23 }
					data-field-red={ 33 }
					data-field-green={ 3 }
				></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
			</div>

			<div className="board-row">
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 6 }
					data-field-blue={ 16 }
					data-field-red={ 26 }
					data-field-green={ 36 }
				></div>
				<div
					className="board-cell circle green"
					onClick={ handleClick }
					data-field-green={ 43 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 14 }
					data-field-blue={ 24 }
					data-field-red={ 34 }
					data-field-green={ 4 }
				></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
			</div>
			<div className="board-row">
				<div
					className="board-cell circle yellow"
					onClick={ handleClick }
					data-field-yellow={ 1 }
					data-field-blue={ 11 }
					data-field-red={ 21 }
					data-field-green={ 31 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 41 }
					data-field-blue={ 12 }
					data-field-red={ 22 }
					data-field-green={ 32 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 42 }
					data-field-blue={ 13 }
					data-field-red={ 23 }
					data-field-green={ 33 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 43 }
					data-field-blue={ 14 }
					data-field-red={ 24 }
					data-field-green={ 34 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 44 }
					data-field-blue={ 15 }
					data-field-red={ 25 }
					data-field-green={ 35 }
				></div>
				<div
					className="board-cell circle green"
					onClick={ handleClick }
					data-field-green={ 44 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 15 }
					data-field-blue={ 25 }
					data-field-red={ 35 }
					data-field-green={ 5 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 16 }
					data-field-blue={ 26 }
					data-field-red={ 36 }
					data-field-green={ 6 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 17 }
					data-field-blue={ 27 }
					data-field-red={ 37 }
					data-field-green={ 7 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 18 }
					data-field-blue={ 28 }
					data-field-red={ 38 }
					data-field-green={ 8 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 19 }
					data-field-blue={ 29 }
					data-field-red={ 39 }
					data-field-green={ 9 }
				></div>
			</div>

			<div className="board-row">
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 40 }
					data-field-blue={ 10 }
					data-field-red={ 20 }
					data-field-green={ 30 }
				></div>
				<div
					className="board-cell circle yellow"
					onClick={ handleClick }
					data-field-yellow={ 41 }
				></div>
				<div
					className="board-cell circle yellow"
					onClick={ handleClick }
					data-field-yellow={ 42 }
				></div>
				<div
					className="board-cell circle yellow"
					onClick={ handleClick }
					data-field-yellow={ 43 }
				></div>
				<div
					className="board-cell circle yellow"
					onClick={ handleClick }
					data-field-yellow={ 44 }
				></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div
					className="board-cell circle red"
					onClick={ handleClick }
					data-field-red={ 44 }
				></div>
				<div
					className="board-cell circle red"
					onClick={ handleClick }
					data-field-red={ 43 }
				></div>
				<div
					className="board-cell circle red"
					onClick={ handleClick }
					data-field-red={ 42 }
				></div>
				<div
					className="board-cell circle red"
					onClick={ handleClick }
					data-field-red={ 41 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 20 }
					data-field-blue={ 30 }
					data-field-red={ 40 }
					data-field-green={ 10 }
				></div>
			</div>

			<div className="board-row">
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 39 }
					data-field-blue={ 9 }
					data-field-red={ 19 }
					data-field-green={ 29 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 38 }
					data-field-blue={ 8 }
					data-field-red={ 18 }
					data-field-green={ 28 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 37 }
					data-field-blue={ 7 }
					data-field-red={ 17 }
					data-field-green={ 27 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 36 }
					data-field-blue={ 6 }
					data-field-red={ 16 }
					data-field-green={ 26 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 35 }
					data-field-blue={ 5 }
					data-field-red={ 15 }
					data-field-green={ 25 }
				></div>
				<div
					className="board-cell circle blue"
					onClick={ handleClick }
					data-field-blue={ 44 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 25 }
					data-field-blue={ 35 }
					data-field-red={ 5 }
					data-field-green={ 15 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 24 }
					data-field-blue={ 34 }
					data-field-red={ 4 }
					data-field-green={ 14 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 23 }
					data-field-blue={ 33 }
					data-field-red={ 3 }
					data-field-green={ 13 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 22 }
					data-field-blue={ 32 }
					data-field-red={ 2 }
					data-field-green={ 12 }
				></div>
				<div
					className="board-cell circle red"
					onClick={ handleClick }
					data-field-yellow={ 21 }
					data-field-blue={ 31 }
					data-field-red={ 1 }
					data-field-green={ 11 }
				></div>
			</div>

			<div className="board-row">
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 34 }
					data-field-blue={ 4 }
					data-field-red={ 14 }
					data-field-green={ 24 }
				></div>
				<div
					className="board-cell circle blue"
					onClick={ handleClick }
					data-field-blue={ 43 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 26 }
					data-field-blue={ 36 }
					data-field-red={ 6 }
					data-field-green={ 16 }
				></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
			</div>

			<div className="board-row">
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 33 }
					data-field-blue={ 3 }
					data-field-red={ 13 }
					data-field-green={ 23 }
				></div>
				<div
					className="board-cell circle blue"
					onClick={ handleClick }
					data-field-blue={ 42 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 27 }
					data-field-blue={ 37 }
					data-field-red={ 7 }
					data-field-green={ 17 }
				></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
			</div>

			<div className="board-row">
				<div className="board-cell circle blue" onClick={ handleClick }>
					<Peg color="blue" id={ 13 } />
				</div>
				<div className="board-cell circle blue" onClick={ handleClick }>
					<Peg color="blue" id={ 14 } />
				</div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 32 }
					data-field-blue={ 2 }
					data-field-red={ 12 }
					data-field-green={ 22 }
				></div>
				<div
					className="board-cell circle blue"
					onClick={ handleClick }
					data-field-blue={ 41 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 28 }
					data-field-blue={ 38 }
					data-field-red={ 8 }
					data-field-green={ 18 }
				></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell circle red" onClick={ handleClick }>
					<Peg color="red" id={ 9 } />
				</div>
				<div className="board-cell circle red" onClick={ handleClick }>
					<Peg color="red" id={ 10 } />
				</div>
			</div>

			<div className="board-row">
				<div className="board-cell circle blue" onClick={ handleClick }>
					<Peg color="blue" id={ 15 } />
				</div>
				<div className="board-cell circle blue" onClick={ handleClick }>
					<Peg color="blue" id={ 16 } />
				</div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div
					className="board-cell circle blue"
					onClick={ handleClick }
					data-field-yellow={ 31 }
					data-field-blue={ 1 }
					data-field-red={ 11 }
					data-field-green={ 21 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 30 }
					data-field-blue={ 40 }
					data-field-red={ 10 }
					data-field-green={ 20 }
				></div>
				<div
					className="board-cell circle"
					onClick={ handleClick }
					data-field-yellow={ 29 }
					data-field-blue={ 39 }
					data-field-red={ 9 }
					data-field-green={ 19 }
				></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell" onClick={ handleClick }></div>
				<div className="board-cell circle red" onClick={ handleClick }>
					<Peg color="red" id={ 11 } />
				</div>
				<div className="board-cell circle red" onClick={ handleClick }>
					<Peg color="red" id={ 12 } />
				</div>
			</div>
		</div>
	);
}

export default Game;
