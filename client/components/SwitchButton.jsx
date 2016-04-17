SwitchButton = React.createClass({
    getInitialState() {
        return {
            text: "Off"
        }
    },

    render() {
        return (
            <button ref="btn" onClick={this.handleClick} type="button" className="btn btn-danger">{this.state.text}</button>
        )

    },

    componentDidMount() {

    },

    handleClick() {
        const $btn = $(this.refs.btn)

        if (this.state.text === "Off") {
            $btn.removeClass("btn-danger")
            $btn.addClass('btn-success')
            this.setState({
                text: "On"
            })
        }

        if (this.state.text === "On") {
            $btn.removeClass("btn-success")
            $btn.addClass('btn-danger')
            this.setState({
                text: "Off"
            })
        }

    }
});



