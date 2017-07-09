import React from 'react'
import propTypes from 'prop-types'
import Remarkable from 'remarkable'

class Comment extends React.Component{
    rawMarkdown(){
        var md = new Remarkable();
        var markdown = md.render(this.props.children.toString());
        return {__html: markdown};
    }
    render(){ 
        return (
            <div className="comment">
                <h2 className="author">{this.props.author}</h2>
                {/*<div>{this.props.children}</div>*/}
                {/*我们需要把 从 React 的包裹文本来的 this.props.children 转换成 remarkable 能理解的原始字符串*/}
                {/*使用这个功能你会依赖于 remarkable 是安全的。*/}
                <span dangerouslySetInnerHTML={this.rawMarkdown()}></span>
            </div>
        )
    }
}
Comment.propTypes = {
    author: propTypes.string.isRequired
}
export default Comment