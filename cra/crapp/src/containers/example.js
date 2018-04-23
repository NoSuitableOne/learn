import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';


const example = () => {
    return (
        <div className="App">
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ui: state.ui
    }
};

const mapDispatchToProps = (dispatch) => {
    return {};
};


const Example = connect(
    mapStateToProps,
    mapDispatchToProps
)(example);

export default Example;
