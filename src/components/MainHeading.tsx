import "../css/Headings.scss";

function MainHeading(props: any) {
    return (
        <div className="main-heading">
            {props.children}
        </div>
    )
}

export default MainHeading