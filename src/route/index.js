import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from '../page/index/index'
import task from '../page/task/task'

class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                {/* <Route path='/' component={Index} /> */}
                <Route path='/task' component={task} />
            </Switch>
        )
    }
}

export default RouterIndex