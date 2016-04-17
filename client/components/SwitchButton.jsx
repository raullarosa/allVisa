SwitchButton = React.createClass({
    render() {

        console.log(this.props.data)
        var Button;
        if (typeof this.props.data === 'number') {
            Button = <button ref="btn" onClick={this.handleClick} type="button" className="btn btn-success">{this.props.data}</button>
        }

        if (this.props.data === true) {
            Button = <button ref="btn" onClick={this.handleClick} type="button" className="btn btn-success">On</button>
        }
        if (this.props.data === false) {
            Button = <button ref="btn" onClick={this.handleClick} type="button" className="btn btn-danger">Off</button>
        }
        
        if(this.props.data === "TCT_AUTO_PAY") {
            Button = <button ref="btn" onClick={this.handleClick} type="button" className="btn btn-success">Auto On</button>
        }
        
        if(!this.props.data) {
            Button = <button ref="btn" onClick={this.handleClick} type="button" className="btn btn-danger">Off</button>
        }
      
        return (

            <div>
                {Button}
            </div>

        )

    },


    handleClick() {
        console.log(this.props.data)
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



