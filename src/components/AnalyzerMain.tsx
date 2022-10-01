//import React from 'react';
import { connect } from 'react-redux';
import AnalyzerForm from "./AnalyzerForm";
export const AnalyzerMain = (props: any) => {
    return (
        <div className="analyzer-main-content">
            <p className="text-area-indication">
                Write your text below
            </p>
            <AnalyzerForm />
        </div>
    );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzerMain);