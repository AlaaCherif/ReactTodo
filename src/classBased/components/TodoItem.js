import React from "react"
import styles from "./TodoItem.module.css"
class TodoItem extends React.Component
{    
       handleUpdatedDone = event => {
              if(event.key==="Enter")
              {
                     this.setState({editing:false})
              }
            }  
       state={
              editing:false,
       }
       handleEdit =()=>{
              this.setState({
                     editing:true,
              })
       }
       componentWillUnmount()
       {
              console.log("cleaning up")
       }
       render()
       {
              let viewMode={}
              let editMode={}  
              if (this.state.editing)
              {
                     viewMode.display="none"
              }     
              else
              {
                     editMode.display="none"
              }
              const {id,title,completed}=this.props.todo
              const completedStyle = { 
                     fontStyle:"italic",
                     color:"#595959",
                     opacity:0.4,
                     textDecoration:"line-through",
              }
              return(
                     <li className={styles.item} key={id}>
                            <div onDoubleClick={this.handleEdit} style={viewMode}>
                            <input type="checkbox" checked={completed } onChange={()=>{this.props.handleChangeProps(id)}}/>
                            <button onClick={()=>{this.props.deleteTodoProps(this.props.todo.id)}}>Delete</button>
                            <span style={this.props.todo.completed ? completedStyle :null}>{title}</span>
                            </div>
                            <input type="text" 
                            className={styles.textInput} 
                            style={editMode} 
                            value={title} 
                            onChange={e=>{this.props.setUpdate(e.target.value,id)}}
                            onKeyDown={this.handleUpdatedDone} 
                            />
                            </li>
                            
              )
       }
}
export default TodoItem     