import AnalyzerMain from './AnalyzerMain';
import Top from './Footer/Top';
import Footer from './Footer';
import "../css/MainComponent.scss";

export const MainComponent = (props: any) => {
    return (
        <div className="main-component">
            <Top />
            <AnalyzerMain />
            <Footer />        
        </div>
    );
};

export default MainComponent;