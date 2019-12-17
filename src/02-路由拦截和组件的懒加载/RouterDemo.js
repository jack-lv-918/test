import React, { Component } from 'react'
import {AdminRoute,SuperAdmin,NoTokenRoute} from './router';


const token = '1232'
const role = 'superAdmin' //admin superAdmin




export default class RouterDemo extends Component {
    render() {
        if (token) {
            // if (role === 'admin') {
            //     return <AdminRoute />
            // } else if(role === 'superAdmin'){
            //     return <SuperAdmin />
            // }
            switch (role) {
                case 'admin':
                    return <AdminRoute />
                case 'superAdmin':
                    return <SuperAdmin />
                default:
                    return <AdminRoute />
            }

        } else {
            return <NoTokenRoute />
        }

    }
}
