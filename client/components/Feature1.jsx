Feature1 = React.createClass({
    render() {
        return (
            <div id={this.props.id} className="text-center col-md-2" style={this.getCssDiv()}>
                <h3 style={this.getCssTitle()}>{this.props.name}</h3>
                <img src={this.props.img} alt={this.props.name} height="169" width="150"/>
                <SwitchButton/>
            </div>
        )
    },

    getCssDiv() {
        return {
        }
    },

    getCssTitle() {
        return {
            color: "#1a1e5b",
            fontSize: "20px"
        }
    },
})