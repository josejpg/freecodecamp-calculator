import React from "react";

export const Display = (props: any) => {
    return (
        <div className="output" id="display">
            <div className="operation-display">{props.history}</div>
            <div
                className="main-display">{!props.calc ? props.display : props.currentNumber}</div>
        </div>
    );
}