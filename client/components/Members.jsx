Members = React.createClass({
    render() {
        return (
            <div className="row text-center" style={this.getCssDiv()}>
                <div className="text-center col-md-3">
                    <h2 style={this.getCssName()}>Joel Cedano</h2>
                    <img src="./img/joel.png" alt="Joel Cedano" height="223" width="200"/>
                    <h4 style={this.getCssPosition()}>Back-end Developer</h4>
                </div>
                <div className="text-center col-md-3">
                    <h2 style={this.getCssName()}>Carlos Correa</h2>
                    <img src="./img/carlos.png" alt="Carlos Correa" height="223" width="200"/>
                    <h4 style={this.getCssPosition()}>Back-end Developer</h4>
                </div>
                <div className="text-center col-md-3">
                    <h2 style={this.getCssName()}>Raul La Rosa</h2>
                    <img src="./img/raul.png" alt="Joel Cedano" height="223" width="200"/>
                    <h4 style={this.getCssPosition()}>Front-end Developer</h4>
                </div>
                <div className="text-center col-md-3">
                    <h2 style={this.getCssName()}>Kelsy Quiroz</h2>
                    <img src="./img/overall_icon.png" alt="Joel Cedano" height="223" width="200"/>
                    <h4 style={this.getCssPosition()}>Marketing Expert</h4>
                </div>
            </div>
        )
    },

    getCssDiv() {
        return {
            backgroundColor:"white"
        }
    },

    getCssName() {
        return {
            color: "#1a1e5b"
        }
    },
    
    getCssPosition() {
        return {
            color: "#1a1e5b"
        }
    }
})