import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Pure extends React.Component {
    constructor() {
        super();
        this.state = {
            nums: [10, 11, 12]
        };
    }

    handleClick = () => {
        let nums = this.state.nums;
        nums[0] += 1;
        this.setState({
            nums: nums
        });
    };

    render () {
        return (
            <div onClick={this.handleClick}>
                pure number is { this.state.nums[0] }
            </div>
        )
    }
}

export default Pure;
