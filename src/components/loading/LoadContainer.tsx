import "./LoadContainer.scss";

function LoadContainer(props: any) {
    return (
        <div className="load-container">
            {props.children}
        </div>
    );
};

export default LoadContainer;