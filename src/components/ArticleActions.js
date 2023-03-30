import React from "react";

function Button(props) {
        return <button>{props.name}</button>;
}

function ArticleActions() {
    return (
       <div className="article__button">
            <Button name="Read" />
            <Button name="Mark as read" />
            <Button name="Mark as unread" />
        </div> 
    );
}
export default ArticleActions;
