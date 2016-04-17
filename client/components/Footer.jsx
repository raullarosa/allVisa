Footer = React.createClass({
    render() {
        return (
            <div className="row text-center" style={this.getCssDiv()}>
                <h2 style={this.getCssTitle()}>We demoded eMerge Hackathon 2016!</h2>
            </div>
        )
    },

    getCssDiv() {
        return {
            backgroundColor: "#1a1e5b",
            padding: "25px"
        }
    },

    getCssTitle() {
        return {
            color: "white"
        }
    },

    getCssDesc() {
        return {
            color: "white",
            fontWeight: "lighter"
        }
    }
})



