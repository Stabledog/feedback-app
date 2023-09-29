import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types';
import Card from './shared/Card'


function FeedbackItem({item,reverse}) {
    return (
        <Card reverse={reverse}>
            <div className="num-display">{item.rating}</div>
            <button className='close'><FaTimes color='purple'/></button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedbackItem;

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
    reverse: PropTypes.bool
};
