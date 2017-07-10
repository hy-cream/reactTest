import React from 'react'

class CommentForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			author: '',
			text: ''
		};
	}
	handleAuthorChange(e){
		e = e || window.event;
		console.log(e.target.value)
		this.setState({author: e.target.value})
	}
	handleTextChange(e){
		e = e || window.event;
		this.setState({text: e.target.value})
	}
	handleSubmit(e){
		console.log('submit')
		e = e || window.event;
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if(!author||!text){
			return ;
		}
		this.onCommentSubmit({author: author, text:text});
		this.setState({author:'', text:''})
	}
	render(){
		return(
			<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text"
					placeholder="your name"
					value={this.state.author}
					onChange={this.handleAuthorChange.bind(this)}/>
				<input type="text"
					placeholder="text..."
					value={this.state.text}
					onChange={this.handleTextChange.bind(this)}/>	
					<input type="submit" value='submit'/>
			</form>
		)
	}
}
export default CommentForm