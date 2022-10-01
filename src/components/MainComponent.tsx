import React from 'react';
import { connect } from 'react-redux';
import AnalyzerMain from './AnalyzerMain';
import Top from './Top';
import Footer from './Footer';

export const MainComponent = (props: any) => {
    return (
        <div className="Main">
            <Top />
            <AnalyzerMain />
            <Footer />        
        </div>
    );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);