import React from "react";

export let History = (props) => {
        return(
            <div className="history">
                <p>{props.historyAdd}</p>
                <p>{props.historyMultiply}</p>
                <p>{props.historyDivide}</p>
            </div>
        );  
};

export default History;
