import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import propTypes from 'prop-types'
//import $ from 'jquery'
import api from '../../api/index'

class CommentBox extends React.Component{
    constructor(){
        super();
        this.state={
            data: []
        };
    }
		loadCommentsFromServer(){
			//获取数据
        // $.ajax({
        // url: this.props.url,
        // dataType: 'json',
        // cache: false,
        // success: function(data) {
        //     this.setState({data: data});
        // }.bind(this),
        // error: function(xhr, status, err) {
        //     console.error(this.props.url, status, err.toString());
        // }.bind(this)
        // });
		}
		handleCommentSubmit(comment) {
			// $.ajax({
			// 	url: this.props.url,
			// 	dataType: 'json',
			// 	type: 'POST',
			// 	data: comment,
			// 	success: function(data) {
			// 		this.setState({data: data});
			// 	}.bind(this),
			// 	error: function(xhr, status, err) {
			// 		console.error(this.props.url, status, err.toString());
			// 	}.bind(this)
			// });
		}
    componentDidMount() {
			// 当组件被渲染时被Ｒeact自动调用的方法
			this.loadCommentsFromServer();
			this.setState({data: api.data});
    }
    render(){
        return (
            <div className="commentBox">
                <h1>comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        )
    }
}
// CommentBox.propTypes = {
//     data: propTypes.isRequired
// }
export default CommentBox