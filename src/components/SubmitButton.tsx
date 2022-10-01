import React from 'react'

function SubmitButton(props: any) {
    return (
        <input className="submit-button"
            type="submit"
            value={props.name}
        />
    );
}

export default SubmitButton