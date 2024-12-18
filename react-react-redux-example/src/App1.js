import React, { useState } from "react";

import './style.css';

/// redux 없이 props 만으로 구현.

function App1() {
    const [number, setNumber] = useState(1);
    return (
        <div id="container">
            <h1>Root : {number}</h1>
            <div id="grid">
                <Left1 number={number} />
                <Right1 number={number}
                 onIncrease={() => {setNumber(number+1);}} />
            </div>
        </div>
    );
}

function Left1(props) {
    return (
        <div>
            <h1>Left1 : {props.number}</h1>
            <Left2 number={props.number} />
        </div>
    );
}

function Left2(props) {
    console.log('2');
    
    return (
        <div>
            <h1>Left2 : {props.number}</h1>
            <Left3 number={props.number} />
        </div>
    );
}

function Left3(props) {
    console.log('3');

    return (
        <div>
            <h1>Left3 : {props.number}</h1>
        </div>
    );
}

function Right1(props) {
    return (
        <div>
            <h1>Right1 : {props.number}</h1>
            <Right2 onIncrease={() => {props.onIncrease();}} />
        </div>
    );
}

function Right2(props) {
    return (
        <div>
            <h1>Right2 : {props.number}</h1>
            <Right3 onIncrease={() => {props.onIncrease();}} />
        </div>
    );
}

function Right3(props) {
    return (
        <div>
            <h1>Right3 : {props.number}</h1>
            <button type="button" onClick={() => {props.onIncrease();}}>+</button>
        </div>
    );
}

export default App1;
