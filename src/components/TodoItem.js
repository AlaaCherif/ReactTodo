import React from "react"
class TodoItem extends React.Component
{
       render()
       {
              return(
                     <li key={this.props.todo.id}>
                            <input type="checkbox" checked={this.props.todo.completed} onChange={()=>{this.props.handleChangeProps(this.props.todo.id)}}/>{this.props.todo.title}</li>
              )
       }
}
export default TodoItem     