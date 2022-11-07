import AnalyzerMain from './AnalyzerMain';
import Top from './Header/Top';
import Footer from './Footer/Footer';
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