import React from 'react';

const Hello = React.createClass({
    getInitialState: function(){
        return {
            open: false
        }
    },
    render: function(){
        console.log('render switch component');
        var open = this.state.open;
        return <label>
                <input type="checkbox" checked={open}/>
            </label>
            <h1>Hello {this.props.name}</h1>
    },
    toggleSwitch: function(){
        var open = this.state.open;
        this.setState({
            open: !open
        });
    }
})

export default Hello;