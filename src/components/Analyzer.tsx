import React from 'react';
import { connect } from 'react-redux';

export const Analyzer = (props: any) => {
    return (
        <div>Analyzer</div>
    );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Analyzer);