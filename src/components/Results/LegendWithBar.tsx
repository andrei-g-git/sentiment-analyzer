import "./LegendWithBar.scss";

function LegendWithBar(props: any) {
    return (
        <div className="legend-with-bar">
            <div className="legend-wrapper">
                {
                    props.headings.map((heading: string) => 
                        <div className="legend-heading">
                            {heading}
                        </div>    
                    )
                }
            </div>

            <div className="horizontal-bar" />
        </div>
    );
}

export default LegendWithBar;