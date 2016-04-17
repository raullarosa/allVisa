Features = React.createClass({

    render() {
        return (
            <div className="row text-center" style={this.getCssDiv()} id="features">
                <h1 style={this.getCssTitle() }>Features</h1>
                <br/>
                <br/>
                <div className="row text-center col-md-offset-1">
                    {this.renderFeature1() }
                </div>
                <br/>
                <div className="row text-center col-md-offset-1">
                    {this.renderFeature2() }
                </div>
            </div>
        )
    },

    getCssDiv() {
        return {
            background:"#FFFFFF",
            padding: "50px",
            height: "100vh"
        }
    },

    getCssTitle() {
        return {
            color: "#1a1e5b"
        }
    },
    renderFeature1() {
        let features1 = [
            { id: "0", name: "Block Card", img:"./img/card_icon.png", data: this.props.data[0] },
            { id: "1", name: "Threshold", img:"./img/threshold_icon.png", data: this.props.data[1] },
            { id: "2", name: "Time Range", img:"./img/time_icon.png", data: this.props.data[2] },
            { id: "3", name: "ATM Withdrawal", img:"./img/atm_icon.png"},
            { id: "4", name: "Brick & Mortar", img:"./img/brickmortar_icon.png" }];

        return features1.map((obj) => {
            return <Feature1 key={obj.id} id={obj.id} name={obj.name} img={obj.img} data={obj.data}/>
        })
    },
    
    renderFeature2() {
        let features2 = [
            { id: "5", name: "E-Commerce", img:"./img/ecommerce_icon.png" },
            { id: "6", name: "International", img:"./img/international_icon.png" },
            { id: "7", name: "Auto-Pay", img:"./img/autopay_icon.png", data: this.props.data[3] },
            { id: "8", name: "Budget", img:"./img/budget_icon.png" },
            { id: "9", name: "Charity", img:"./img/charity_icon.png" }];

        return features2.map((obj) => {
            return <Feature1 key={obj.id} id={obj.id} name={obj.name} img={obj.img} data={obj.data}/>
        })
        
    }


})