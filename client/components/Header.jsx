Header = React.createClass({
    render() {
        return (
            <div onClick={this.handleClick} className="row text-center" style={this.getCssDiv() }>
                <em style={this.getCssTitle()}>allVisa</em>
                <h1 style={this.getCssDesc()}>Security, Control & Beyond</h1>
                <h3 style={this.getCssDesc()}>by Slackers</h3>
                <a  ><span className="glyphicon glyphicon-chevron-down" style={this.getCssButton() }></span></a>
            </div>
        )
    },

    getCssDiv() {
        return {
            padding: "33vh",
            height: "100vh"
        }
    },

    getCssTitle() {
        return {
            fontSize: "70px",
            color: "white"
        }
    },

    getCssDesc() {
        return {
            color: "white",
            fontWeight: "lighter"
        }
    },

    getCssButton() {
        return {
            color: "white",
            fontSize: "40px",
            paddingTop: "30px"
        }   
    },

    handleClick( ) {
        $("#features").scrollView()
    }
})



