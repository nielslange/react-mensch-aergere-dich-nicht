import { useSelector } from 'react-redux';

import Peg from './Peg';
import './Board.scss';

const Game = () => {
	const fields = useSelector( ( state: any ) => state.fields );
	const pegs = useSelector( ( state: any ) => state.pegs );

	const rows = fields.map( ( field: any, index: number ) => {
		return (
			<div className={ field.className }>
				{ pegs.map( ( peg: any ) => {
					return peg.field === index + 1 ? <Peg key={ peg.id } id={ peg.id } color={ peg.player.toLowerCase() } /> : null;
				} ) }
			</div>
		);
	} );

	return <div className="board">{ rows }</div>;
};

export default Game;
