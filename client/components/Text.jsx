Text = React.createClass({
    render() {
        return (
            <div style={this.getCss()}>
                {this.props.text}
            </div>
        )
    },
    
    getCss() {
        return {
            border: "1px solid " + this.props.color
        }
    }
})



