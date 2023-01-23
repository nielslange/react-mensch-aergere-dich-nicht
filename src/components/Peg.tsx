import classnames from 'classnames';
import './Peg.scss';

interface PegProps {
	color: string;
	id: number;
}

const Peg = ( props: PegProps ) => {
	const { color, id } = props;

	const handleClick = ( event: any ) => {
		const { id } = event.target.data.peg;
		console.log( 'Peg clicked:', id );
	};

	return <div className={ classnames( 'peg', color ) } key={ id } data-peg={ id } onClick={ handleClick }></div>;
};

export default Peg;
