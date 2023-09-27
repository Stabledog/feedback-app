function App() {
    const title = 'Blog post';
    const body = 'This is my blog post body';

    const comments = [
        { id:1, text: 'Comment one'},
        { id:2, text: 'Comment two'},
        { id:3, text: 'Comment three'},
    ];

    return (
        <div className='container'>
            <h1>{title}</h1>
            <p>{body + ":" + Math.random() * 4}</p>
            <div className="comments">
                <h3>Comments {comments.length}</h3>
                {
                    comments.map(
                        (comment,index) => (
                        <li key={index}> {comment.text}</li>
                        )
                    )
                }
            </div>
        </div >
    );
}

export default App;
