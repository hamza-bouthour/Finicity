import React, { Component } from 'react';

class NewClass extends Component {

    constructor(props) {
        super();
        this.state = {
            
        }
    }
    componentDidMount() {
        console.log('class component')
    }

    render() {
        return (
            <div>Class Component</div>
        )
    }
} 
export default NewClass;