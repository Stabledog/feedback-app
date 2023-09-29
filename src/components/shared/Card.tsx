import {ReactNode} from 'react'


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
