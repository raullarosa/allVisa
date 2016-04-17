SwitchButton = React.createClass({
    render() {
        return (
            <div className="text-center">
                <div className="checkbox text-center">
                    <input type="checkbox" value=""/>
                </div>
            </div>
        )

    },
    
    getCssButton() {
        return {
            color: "#1a1e5b",
            fontSize: "40px",
            paddingTop: "30px"
        }
    }
});



