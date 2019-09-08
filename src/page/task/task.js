import React from 'react';
import './task.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            list: [],
        };
    }
    render() {
        let { name, list } = this.state

        return (
            <div>
                <div>
                    <input placeholder="请输入文字" name="任务名" value={name} onChange={(e) => {
                        this.setState({
                            name: e.target.value
                        })
                    }}></input>
                    <button className="buttonWrap" onClick={() => {
                        list.push({
                            name,
                        })
                        this.setState({
                            list,
                            name: ""
                        })
                    }}>确定</button>
                </div>
                <div>
                    {list && list.map((item, index) => {
                        return (
                            <p key={index} className="listItem">
                                <input type="checkbox" id={`checkBox${index}`} name={item.name} value={item.name} onChange={(e) => {
                                    let checkboxDom = document.getElementById(`checkBox${index}`)
                                    item.checked = checkboxDom.checked
                                    this.setState({
                                        list
                                    })
                                }} />
                                <span className={item.checked ? "listItemName" : ""}>{item.name}</span>
                                <button className="deleteButton" onClick={() => {
                                    list.splice(index, 1)
                                    this.setState({
                                        list
                                    })
                                }}>删除</button>
                            </p>)
                    })}
                </div>
            </div>
        )
    }
}
// export default task;
