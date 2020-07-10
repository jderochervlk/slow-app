import React from 'react'

class SlowRender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.foo = 0
        this.handleRes = this.handleRes.bind(this)
        this.handleErr = this.handleErr.bind(this)
    }

    componentWillMount() {
        this.setState({foo: 'bar'})
    }

    handleRes(res) {
        this.setState({ res })
    }

    handleErr(e) {
        this.setState({e})
    }


    render() {
        
        fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then(response => response.json())
            .then(this.handleRes)
            .catch(this.handleErr)
            
        this.foo = 100
        
        return (
            <div>
                {this.foo}
                <hr/>
                {JSON.stringify(this.state)}
            </div>
        )
    }

}

export default SlowRender
