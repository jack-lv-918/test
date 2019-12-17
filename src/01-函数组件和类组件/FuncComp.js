//引入核心依赖
import React from 'react';


export default function FuncComp({name}){
    console.log('name',name)
    return(
        <div>函数组件 {name}</div>
    )
}