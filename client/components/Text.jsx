Text = React.createClass({
    render() {
        return (
            <div className="row" style={this.getCss()}>

            </div>
        )
    },
    
    getCss() {
        return {
            border: "1px solid " + this.props.color,
           
        }
    }
})



