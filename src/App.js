function App() {
    const title = "Blog post";
    const body = "This is my blog post body";
    const comments = [
        { id: 1, text: "Comment one" },
        { id: 2, text: "Comment two" },
        { id: 3, text: "Comment three" },
    ];
    const comment_block = (<div className="comments">
                    <h3>Comments {comments.length}</h3>
                    {comments.map((comment, index) => (
                        <li key={index}> {comment.text}</li>
                    ))}
                </div>);


    const loading = false;

    if (loading) {
        return <h3>Loading...</h3>;
    }
    const showComments = true;

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body + ":" + Math.random() * 4}</p>
            {showComments && comment_block}
        </div>
    );
}

export default App;
