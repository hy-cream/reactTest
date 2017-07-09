import React from 'react'
import CommentList from './CommentList'
import propTypes from 'prop-types'
class CommentBox extends React.Component{
    render(){
        return (
            <div className="commentBox">
                <h1>comments</h1>
                <CommentList data={this.props.data} />
            </div>
        )
    }
}
CommentBox.propTypes = {
    data: propTypes.isRequired
}
export default CommentBox