import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
// import Home from './Home';
// import Detail from './Detail';
import Login from './Login';
// import Reg from './Reg';
// import Error from './Error';

//路由懒加载：等到路由跳转到home路劲的时候在下载home页面相关的资源
const Home = Loadable({
    loader:()=>import(/*webpackChunkName:'home'*/'./Home'),
    loading:()=><div>加载中...</div>
});

const Detail = Loadable({
    loader:()=>import(/*webpackChunkName:'detail'*/'./Detail'),
    loading:()=><div>加载中...</div>
});

const Reg = Loadable({
    loader:()=>import('./Reg'),
    loading:()=><div>加载中...</div>
});

const Error = Loadable({
    loader:()=>import('./Error'),
    loading:()=><div>加载中...</div>
});


export const AdminRoute = function () {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/reg" component={Reg} />
                <Route path="/home" component={Home} />
                <Redirect to="/home" />
            </Switch>
        </HashRouter>
    )
}

export  const SuperAdmin = function () {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/reg" component={Reg} />
                <Route path="/home" component={Home} />
                <Route path="/detail" component={Detail} />
                <Route component={Error} />
            </Switch>
        </HashRouter>
    )
}


export  const NoTokenRoute = function () {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/reg" component={Reg} />

                <Redirect to="/" />

            </Switch>
        </HashRouter>
    )
}
