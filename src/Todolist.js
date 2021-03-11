import React, {Component,Fragment} from'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';
 class Todolist extends Component{

    constructor(props) {
      super(props);
      this.state ={
          inputValue:'',
          list: []
      }
      this.handleInputChange= this.handleInputChange.bind (this);
      this.handleBtnClick=this.handleBtnClick.bind(this);
      this.handleItemDelete=this.handleItemDelete.bind(this);
    }
    //在组件即将被挂在到页面的时刻执行
//componentWillUnmount(){
    //console.log('componentWillMount');
//}

  render(){
      //console.log('parent render');//看com是否在被挂在之前执行
         return(
             <Fragment>
                 {/*JSX zujian xia mian shi input kuang*/}
             <div>
                 {
                     //dan hang zhushi
                 }
                 <label htmlFor="insertArea"> Please Input Content </label>
                 
                 <input 
                 id= "insertArea"
                 className='input'
                 value={this.state.inputValue}
                onChange={this.handleInputChange}
                
                 />
                 <button 
                 onClick={this.handleBtnClick}>submit
                 </button>
                 </div>
             <ul >
                {
                    this.getTodoItem()
                }
             </ul>

             </Fragment>
         )
         }

        componentDidMount(){
axios.get('/api/todolist')
.then(() =>{alert('succ')})
.catch(() =>{alert('error')})
}

         getTodoItem(){
            return this.state.list.map((item,index)=>{
                return(
                    <div key={index}>
                    <TodoItem 
                     content={item}
                     index={index}
                     deleteItem={this.handleItemDelete}/> 
                    </div>
                ) 
            })
         }

  handleInputChange(e){
    const value =e.target.value;  
    //console.log(e.target);
      //da yin chu e.target zhi  dom jiedian
      //const value=e.target.value;
    this.setState ( ()=>({
       inputValue: value
    })) ;   
  }

  handleBtnClick(){
    this.setState ( (prevState)=>({
        list: [...this.state.list, this.state.inputValue],
        inputValue:''
     })
     /*,()=>{
         console.log(this.ul.querySelectorAll('div').length);
     }*/
     ); 
   }


  handleItemDelete(index){
      //immutable
      //do no correct state
      this.setState ( (prevState)=>{
          const list =[...prevState.list]
          list.splice(index,1);
        return{list}  
     });
    }
 }
export default Todolist;