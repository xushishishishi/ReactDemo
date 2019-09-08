import React from 'react';
import './task.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            list: [],
            state: "all",  //完成情况，all/0/1  所有/未完成/已完成
        };
    }
    render() {
        let { name, list, state } = this.state
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
                    }}>添加</button>
                </div>
                <div>
                    {list && list.map((item, index) => {
                        if ((state === 0 && item.checked) || (state === 1 && !item.checked)) {
                            return
                        } else {
                            return (
                                <p key={index} className="listItem">
                                    <input type="checkbox"
                                        id={`checkBox${index}`}
                                        name={item.name}
                                        value={item.name}
                                        checked={item.checked}
                                        onChange={(e) => {
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
                        }
                    })}
                </div>
                <div className="buttonWarp">
                    <button style={{ marginRight: "16px" }} onClick={() => {
                        this.setState({ state: "all" })
                    }}>全部</button>
                    <button style={{ marginRight: "16px" }} onClick={() => {
                        this.setState({ state: 1 })
                    }}>已完成</button>
                    <button onClick={() => {
                        this.setState({ state: 0 })
                    }}>未完成</button>
                </div>
            </div>
        )
    }
}
// export default task;
