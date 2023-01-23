import { useSelector } from 'react-redux';

import Peg from './Peg';
import './Board.scss';

const Game = () => {
	const fields = useSelector( ( state: any ) => state.fields );
	const pegs = useSelector( ( state: any ) => state.pegs );
	const rows = fields.map( ( field: any ) => {
		return (
			<div
				key={ field.id }
				className={ field.className }
				data-id={ field.id }
				data-yellow={ field.field?.yellow }
				data-green={ field.field?.green }
				data-red={ field.field?.red }
				data-blue={ field.field?.blue }
			>
				{ pegs.map( ( peg: any ) => {
					if (
						( peg.player === 'yellow' && peg.field.yellow === 0 && peg.field.initial === field.id ) ||
						( peg.player === 'yellow' && peg.field.yellow !== 0 && peg.field.yellow === field.field?.yellow ) ||
						( peg.player === 'green' && peg.field.green === 0 && peg.field.initial === field.id ) ||
						( peg.player === 'green' && peg.field.green !== 0 && peg.field.green === field.field?.green ) ||
						( peg.player === 'red' && peg.field.red === 0 && peg.field.initial === field.id ) ||
						( peg.player === 'red' && peg.field.red !== 0 && peg.field.red === field.field?.red ) ||
						( peg.player === 'blue' && peg.field.blue === 0 && peg.field.initial === field.id ) ||
						( peg.player === 'blue' && peg.field.blue !== 0 && peg.field.blue === field.field?.blue )
					) {
						return (
							<Peg key={ peg.id } id={ peg.id } player={ peg.player } yellow={ field.field?.yellow } green={ field.field?.green } red={ field.field?.red } blue={ field.field?.blue } />
						);
					}
					return null;
				} ) }
			</div>
		);
	} );

	return <div className="board">{ rows }</div>;
};

export default Game;
