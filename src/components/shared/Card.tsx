import {ReactNode} from 'react'
import PropTypes from 'prop-types';

interface CardProps {
    children: ReactNode,
    reverse: boolean
};

function Card({children,reverse}:CardProps) {
    return (<div className={`card ${reverse && 'reverse'}`}>{children}</div>);
}

export default Card;

Card.defaultProps = {
    reverse:false
}

Card.propTypes = {
    reverse: PropTypes.bool,
    children: PropTypes.node.isRequired
}
