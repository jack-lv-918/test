//引入核心依赖
import React from 'react';


//创建并导出组件
export default class ClassComp extends React.Component{
    state = {
        name:"张三"
    }
    render(){
        return(
            <div>class组件</div>
        )
    }
}