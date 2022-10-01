import React from 'react'
import "../css/GenericButton.scss";

function SubmitButton(props: any) {
    return (
        <input className="generic-button"
            type="submit"
            value={props.name}
        />
    );
}

export default SubmitButton