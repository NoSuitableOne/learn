import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Checkbox, Dropdown, Icon, Input, message, Menu, Modal, Popover, Select, Table } from 'antd';
import CollapseList from '../components/CollapseList/CollapseList';
import '../App.css';
import './entry.less';
import request from '../utils/request';


const Option = Select.Option;
const Search = Input.Search;

const data = [];


class entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      mock: data,
      selection: {
        sel1: [],
        sel2: [],
        sel3: []
      },
      firstOk: false,
      popshow: false
    };
    this.columns = [
      {
        title: 'Id',
        children: [{
          title: 'id',
          dataIndex: 'num'
        },
          {
            title: 'set',
            dataIndex: 'part'
          }]
      },
      {
        title: 'checked',
        dataIndex: 'flag1',
        colSpan: 3,
        render: (text, record) => {
          return (<div><Checkbox checked={record.flag1} /> <span>flag1</span></div>);
        }
      },
      {
        dataIndex: 'flag2',
        colSpan: 0,
        render: (text, record) => {
          return (<div><Checkbox checked={record.flag2} /> <span>flag2</span></div>);
        }
      },
      {
        dataIndex: 'flag3',
        colSpan: 0,
        render: (text, record) => {
          return (<div><Checkbox checked={record.flag3} /> <span>flag3</span></div>);
        }
      },
      {
        title: 'description',
        dataIndex: 'description',
        render: (text, record) => {
          const obj = {
            children: record.description,
            props: {}
          };
          obj.props.rowSpan = record.time;
          return obj;
        }
      },
      {
        title: 'manipulate',
        render: (text, record) => {
          return (
            <div className="aim" style={{"position": "relative"}} onClick={()=>{this.setState({popshow: true})}}>opp</div>
          );
        }
      }
    ];
  }

  componentDidMount() {
    request('http://server/entry/table', {method: 'GET'}).then((data) => {this.loadTable(data)});
    request('http://server/entry/sel1', {method: 'GET'}).then((data) => {this.loadSel1(data)});
    // request('http://server/entry/sel2', {method: 'GET'}).then((data) => {this.loadSel2(data)});
    // request('http://server/entry/sel3', {method: 'GET'}).then((data) => {this.loadSel3(data)});
    // window.addEventListener("keydown", (event)=>{this.keyDown(event)});
  }

  flag1Filter(value) {
    if (value === 'f1-yes') {
      this.setState((prev) => {
        const data = prev.mock.filter((ele) => {
          return ele.flag1;
        });
        return Object.assign({}, ...prev, { mock: data });
      });
    }
    if (value === 'f1-no') {
      this.setState((prev) => {
        const data = prev.mock.filter((ele) => {
          return !ele.flag1;
        });
        return { mock: data };
      }, () => {this.loadTable(data)}
      );
    }
  }

  loadTable({data:{table: mock}}) {
    let cache, firstIndex;
    for (let i = 0, len = mock.length; i < len; i++) {
      // 赋值临时存量
      if (mock[i].description !== cache) {
        cache = mock[i].description;
        firstIndex = i;
        mock[i].time = 1;
      } else {
        mock[firstIndex].time += 1;
        mock[i].time = 0;
      }
    }
    this.setState({
      mock
    });
  }

  loadSel1(raw) {
    const { data: { sel: options} } = raw;
    this.setState((prev) => {
      return Object.assign({}, prev, {selection: Object.assign({}, prev.selection, { sel1: options })});
    })
  }

  loadSel2(raw) {
    const { data: { sel: options} } = raw;
    this.setState({
      selection: {sel2: options}
    });
  }

  loadSel3(raw) {
    const { data: { sel: options} } = raw;
    this.setState({
      selection: {sel3: options}
    });
  }

  handleCancel() {
    this.setState({
      modal: false
    });
  }

  handleOk() {
    this.setState({
      modal: false
    });
  }

  firstOk() {
    this.setState({
      firstOk: true
    });
  }

  firstCancel() {
    this.setState({
      popshow: false
    });
  }

  finalOk() {

    request('http://server/entry/table', {method: 'GET'}).then((data) => {this.loadTable(data)});
    debugger;
  }

  handleVisible(visible) {
    console.log(visible);
    this.setState({
      popshow: visible
    });
  }

  handleMenu(value) {
    console.log(value);
  }

  showModal(value) {
    this.setState({
      modal: value
    });
  }

  keyDown(event) {
    console.log(event)
    console.log(event.clipboardData)
    return false;
  }

  render (){
    return(
      <div className="entry-main">
        <div className="entry-main-title">
          <h2 id="test" style={{ "display": "inline-block" }}>This is a title</h2>
          <Button style={{ "display": "inline-block", "float": "right" }}>Link</Button>
        </div>
        <div>
          <Select onSelect={(value)=>{this.flag1Filter(value)}} style={{ width: 120 }} showSearch={true}>
            {this.state.selection.sel1.map((ele, index) => {
              return (<Option value={ele} key={index + 1}>{ele}</Option>);
            })}
          </Select>
          <Select style={{ width: 120 }}>
            {this.state.selection.sel2.map((ele, index) => {
              return (<Option value={ele} key={index}>{ele}</Option>);
            })}
          </Select>
          <Select style={{ width: 120 }}>
            {this.state.selection.sel3.map((ele, index) => {
              return (<Option value={ele} key={index}>{ele}</Option>);
            })}
          </Select>
        </div>
        <Table onKeyDown={(event)=>this.keyDown(event)} dataSource={this.state.mock} columns={this.columns} pagination={false} bordered />
        <Popover
          content={
            <div>
              <div>
                input: <Input />
                <Button type="primary" onClick={()=>this.firstOk()}>ok</Button>
                <Button onClick={()=>this.firstCancel()}>cancel</Button>
              </div>
            </div>
          }
          trigger="click"
          getTooltipContainer={() => document.getElementsByClassName("aim")[2]}
          onVisibleChange={(visible)=>this.handleVisible(visible)}
          visible={this.state.popshow}
          placement="bottom"
          autoAdjustOverflow={false}
          arrowPointAtCenter={true}
        />
        <div className="entry-main-buttons">
          <Button type="primary" onClick={() => this.showModal(true)}>Submit</Button>
          <Button onClick={() => {this.showModal(true)}}>Cancel</Button>
          <Modal
            visible={this.state.modal}
            onOk={() =>this.handleOk()}
            onCancel={() =>this.handleCancel()}
            className="modal"
          >
            <p onCopy={(event)=>{event.preventDefault();message.warning("f", 1.5);}}>do u want to cancel?</p>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    entry: state.entry
  };
};

const Entry = connect(mapStateToProps)(entry);

export default Entry;
