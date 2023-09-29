import Card from './shared/Card.jsx'

function FeedbackItem({item,reverse}) {

    return (
        <Card reverse={reverse}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

export default FeedbackItem;
