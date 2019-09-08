import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import RouterIndex from '../../route/index';//引入路由管理js

export default class Index extends React.Component {
    render() {
        return (
            <div className="indexWrap">
                <Router>
                    <Link to="/task">任务页面</Link>
                    <RouterIndex />
                    {/* 中间使用路由渲染 */}
                </Router>
            </div>
        )
    }
}
// export default task;
