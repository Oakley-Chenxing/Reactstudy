 import React, {Component,Fragment} from'react';
import './style.css';
import TodoItem from './TodoItem';
 class Todolist extends Component{

    constructor(props) {
      super(props);
      this.state ={
          inputValue:'',
          list: []
      }
    }
  render(){
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
                  onChange={this.handleInputChange.bind(this)}
                 />
                 <button onClick={this.handleBtnClick.bind(this)}>submit</button>
                 </div>
             <ul>
                {
                    this.state.list.map((item,index)=>{
                        return(
                            <div>
                            <TodoItem content={item}/> 

                        {/*<li key={index} 
                        onClick={this.handleItemDelete.bind(this, index)}
                        dangerouslySetInnerHTML={{__html: item}}
    
                        >
                
                        </li>*/}
                             </div>
                        ) 
                    })
                }
             </ul>
             </Fragment>
         )
         }
  handleInputChange(e){
this.setState({
        inputValue: e.target.value
    })
  }
  handleBtnClick(){
this.setState({
    list: [...this.state.list, this.state.inputValue],
    inputValue:''
})

  }
  handleItemDelete(index){
      //immutable
      //do no correct state
      const list=[...this.state.list];
list.splice(index,1);

this.setState({
    list:list
})

    console.log(index);
}
     }

export default Todolist;