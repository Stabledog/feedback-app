import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types';
import Card from './shared/Card'

function onClick_Close(v:any) {
    console.log(992);
    console.log(v);
}

function FeedbackItem({item,reverse}) {
    return (
        <Card reverse={reverse}>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={onClick_Close}><FaTimes color='purple'/></button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedbackItem;

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
    reverse: PropTypes.bool
};
