import { useSelector } from 'react-redux';
import classnames from 'classnames';
import './Notice.scss';

const Notice = () => {
	const notice = useSelector( ( state: any ) => state.notice );

	return (
		<>
			<h2>Notice.tsx</h2>
			<div className={ classnames( 'notice', notice.type ) }>{ notice.message }</div>
		</>
	);
};

export default Notice;
