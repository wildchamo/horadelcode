import React from "react";
import "./styleslinkgdsc.css"

function LinkGDSC(props) {
    return (
        <div className="linkgdsc">
            <a target="_blank" href={props.url}>{props.name}</a>
            
        </div>
    )
}

export { LinkGDSC };