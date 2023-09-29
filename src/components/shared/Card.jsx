import PropTypes from 'prop-types';

function Card({children,reverse}) {
    console.log(reverse);
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
