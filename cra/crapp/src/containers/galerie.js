import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    mark
} from '../state/actions/all';
import Pure from '../components/pure';


class galerie extends Component {

    componentDidMount() {
        this.props.getName();
    }

    render () {
        console.log(this.props)
        return (
            <div>
                { this.props.info.server.isFetching ?
                    (
                        <span>
                            querying...
                        </span>
                    )
                    :
                    (
                        <span onClick={() => this.props.getName()}>
                            { this.props.info.server.name }
                        </span>
                    )
                }
                <ul>
                    <li key={0} onClick={() => this.props.markItem(0)}>0</li>
                    <li key={1} onClick={() => this.props.markItem(1)}>1</li>
                    <li key={2} onClick={() => this.props.markItem(2)}>2</li>
                </ul>
                <Pure />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
        info: state.info
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        markItem: id => {
            dispatch(mark({ payload: id }));
        },
        getName: () => {
            dispatch({ type: 'QUERY_INFO' });
        }
    };
};


const Galerie = connect(
    mapStateToProps,
    mapDispatchToProps
)(galerie);


export default Galerie;
