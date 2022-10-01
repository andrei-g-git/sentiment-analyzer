import React from 'react'

function withHandleSubmitText(WrappedComponent: typeof React.Component | React.ComponentClass<any> | React.FunctionComponent<any>) { //nope this should be for form components but the 2 forms I'll be using are structured and styled too differently
    return (props: any) => {
        return(
            <WrappedComponent {...props}
                onSubmit={() => handleSubmitText(event)}
            />
        );
    };
}

const handleSubmitText = (event: any) => {
    event.preventDefault();
    console.log("submited text for analisys")
}

export default withHandleSubmitText;