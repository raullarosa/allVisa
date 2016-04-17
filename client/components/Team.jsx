Team = React.createClass({
    render() {
        return (
            <div className="row text-center" style={this.getCssDiv()}>
                <h2 style={this.getCssTitle()}>We demoded eMerge Hackathon 2016!</h2>
                <Members/>
            </div>
        )
    },

    getCssDiv() {
        return {
            background: "url(http://emergeamericas.org/wp-content/uploads/2015/10/background-oct20151-767x384.jpg) center center fixed",
            width: "100%",
            height: "32vh",
            color: "white"
        }
    },

    getCssTitle() {
        return {
            color: "1a1e5b"
        }
    },

    getCssDesc() {
        return {
            color: "white",
            fontWeight: "lighter"
        }
    }
})



