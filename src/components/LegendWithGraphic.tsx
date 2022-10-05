import "../css/LegendWithGraphic.scss";

function LegendWithGraphic(props: any) {
    return (
        <div className="legend-with-graphic">
            <div className="graphic-heading">
                {props.heading}
            </div>
            <div className="graphic-wrapper">
                {
                    props.children
                }                
            </div>
            <div className="dummy-item"/>

        </div>
    );
}

export default LegendWithGraphic;