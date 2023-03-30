import React from "react";

function Button(props) {
    return <button>{props.name}</button>;
}

function Article() {
    return (
        <div>
            <div className="article__title">
                <h2>NVIDIA Accelerated AI on Azure</h2>
            </div> 
            <div className="article__text">
                <h3>Article description:</h3>
                <p>NVIDIA on Azure is bringing AI, networking, and high-performanse computing to the enterprise</p>
            </div>
            <div className="article__button">
                <Button name="Read" />
                <Button name="Mark as read" />
                <Button name="Mark as unread" />
            </div>
            <div className="article__autor">
                <p>Author: Mike</p>
                <p>Published: 06.12.2022</p>
                <p>Theme: Video cards</p>
            </div> 
        </div> 
    );
}

export default Article;