import { connect } from 'react-redux';
import AnalyzerForm from "./AnalyzerForm";
import Results from './Results/Results';
import MainHeading from './MainHeading';
import Mic from './form/Mic';
import "../css/AnalyzerMain.scss";


export const AnalyzerMain = (props: any) => {
    return (
        <div className="analyzer">
            <MainHeading>
                Write something in the form...
            </MainHeading>
            <div className="analyzer-main-content">
                <Mic />
                <AnalyzerForm />
                <Results />              
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzerMain);