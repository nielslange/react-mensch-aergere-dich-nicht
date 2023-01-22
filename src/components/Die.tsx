import { useDispatch, useSelector } from 'react-redux';
import { rollDie } from '../data/actions';

const Die = () => {
	const dispatch = useDispatch();
	const die = useSelector( ( state: any ) => state.die );

	return (
		<div>
			<h2>Die.tsx</h2>

			<table>
				<tbody>
					<tr>
						<td>Die</td>
						<td>:</td>
						<td>{ die }</td>
					</tr>
				</tbody>
			</table>

			<button onClick={ () => dispatch( rollDie() ) }>Roll dice</button>
		</div>
	);
};

export default Die;
