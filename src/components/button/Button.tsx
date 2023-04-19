import { Props } from "./props";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const render = (props: Props) => {
    if (props.icon) {
        return (<FontAwesomeIcon icon={props.icon} />);
    } else {
            return props.text;
    }
}

const Button = (props: Props) => {
    return (
        <button type="button"
                data-target={props.dataTarget}
                data-key={props.dataKey}
                className={props.className}
                aria-label={props.ariaLabel}>
            {render(props)}
        </button>
    )
}

export {
    Button
}