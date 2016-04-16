SwitchButton = React.createClass({
    render() {
        return (
            <div className="onoffswitch">
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" />
                <label className="onoffswitch-label" htmlFor="myonoffswitch"></label>
            </div>
        )

    }

});



