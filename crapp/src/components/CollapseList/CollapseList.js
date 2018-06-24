import React from 'react';
import PropTypes from 'prop-types';


class CollapseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: [],
      hideList: []
    };
  }

  render(props) {
    return (
      <ul>
        {this.props.list.map((ele, index) => {
          return(<li key={index}>{ele.value}</li>);
        })}
      </ul>
    );
  }
}

CollapseList.propTypes = {
  list: PropTypes.array
};

export default CollapseList;
