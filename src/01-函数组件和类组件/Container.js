import React, { Component } from 'react'
import FuncComp from './FuncComp';

export default class Container extends Component {
    render() {
        return (
            <div>
                <FuncComp name="张三"/>
            </div>
        )
    }
}
