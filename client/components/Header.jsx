Header = React.createClass({
    render() {
        return (
            <div onClick={this.handleClick} className="row text-center" ref="header" style={this.getCssDiv() }>
                <em style={this.getCssTitle()}>allVisa</em>
                <h1 style={this.getCssDesc()}>Security, Control & Beyond</h1>
                <h3 style={this.getCssDesc()}>by Slackers</h3>
                <a  ><span className="glyphicon glyphicon-chevron-down" style={this.getCssButton() }></span></a>
            </div>
        )
    },
    
    componentDidMount() {
       let head = $(this.refs.header)
      TweenMax.from(head, 1.5, {opacity:0, delay:2, x: "-20px"});
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
            color: "white",
            textShadow: "5px 5px 5px rgba(0,0,0,0.6)",
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



