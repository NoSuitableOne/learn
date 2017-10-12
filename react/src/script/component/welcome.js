import React from 'react';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return <h1>Welcome {this.props.name}!</h1>;
    }
}

Welcome.propTypes = {
    name: React.PropTypes.string
};

Welcome.defaultProps = {
    name: 'U'
};

export default Welcome;