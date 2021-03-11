import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component{
constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
}
shouldComponentUpdate(nextProps, nextState){
    if (nextProps.conent !== this.props.conent){
        return true;
    }else{
        return false;//性能优化,不再多执行子组件render,强制要求不更新
    }
    
}

    render(){
        console.log('child render');
        return (
        <div onClick={this.handleClick}>
            {this.props.content}
            </div>)   
    }   
    handleClick(){
        const  {deleteItem, index}=this.props;
        deleteItem(index);
           
}
}
//做校验 接受按要求的值
TodoItem.propTypes={
    content: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),//onoftype shuzu
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
//定义默认值 真的没有test值

export default TodoItem;