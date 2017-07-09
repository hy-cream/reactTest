import React from 'react'
import Comment from './Comment'
import Remarkable from 'remarkable'

class CommentList extends React.Component{
    render(){
      var commentNodes = this.props.data.map(function(comment){
        return(
          <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>  
        )
      })
      return(
        <div className="CommentList">
          {commentNodes}
        </div>
      )  
    }
}
export default CommentList