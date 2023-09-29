import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types';
import Card from './shared/Card'

function onClick_Close(id:number,v:any): void  {
    console.log(992);
    console.log(id,v);
}

interface FeedbackItemProps  {
    item: any,
    reverse: boolean
};

function FeedbackItem({item,reverse}: FeedbackItemProps) :JSX.Element {
    console.log(item);
    return (
        <Card reverse={reverse}>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={(v)=>onClick_Close(item.id,v)}><FaTimes color='purple'/></button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedbackItem;

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
    reverse: PropTypes.bool
};
