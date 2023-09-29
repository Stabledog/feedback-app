import {ReactNode} from 'react'


interface CardProps {
    children: ReactNode,
    reverse: boolean
};

export default function Card({children,reverse}:CardProps): JSX.Element {
    return (<div className={`card ${reverse && 'reverse'}`}>{children}</div>);
}


Card.defaultProps = {
    reverse:false
}
