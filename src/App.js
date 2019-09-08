import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import RouterIndex from './route/index';//引入路由管理js
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Link to="/task">任务页面</Link> */}
        <RouterIndex />
        {/* 中间使用路由渲染 */}
      </Router>
    </div>
  );
}

export default App;
