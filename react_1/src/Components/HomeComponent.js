import React from 'react';

function Home(props) {

    console.log(props.username);
    return (
        <>
        <h2>This is home page of {props.username}</h2>
        </>
    );
}

export default Home;
