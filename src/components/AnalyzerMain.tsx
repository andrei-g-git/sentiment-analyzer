import { connect } from 'react-redux';
import AnalyzerForm from "./AnalyzerForm";
import Results from './Results';
import "../css/AnalyzerMain.scss";
import Contact from './Contact';

export const AnalyzerMain = (props: any) => {
    return (
        <div className="analyzer">
            <p className="text-area-indication">
                Write your text below
            </p>
            <div className="analyzer-main-content">
                <AnalyzerForm />
                <Results />              
            </div>

            <Contact />  

        </div>
    );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzerMain);