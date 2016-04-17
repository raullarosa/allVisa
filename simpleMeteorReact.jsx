if (Meteor.isClient) {
  $.fn.scrollView = function () {
    return this.each(function () {
      var root = $('html, body');
      root.stop().animate({
        scrollTop: $(this).offset().top
      }, 1000, 'swing')
    })
  }
  
  

class Switch extends React.Component {

    constructor ( props ) {
        super( props );
		
		this.state = {
			isChecked: null
		}
    }
	
	componentWillMount () {
		this.setState( { isChecked: this.props.isChecked } );
	}


    render () {

        return(
            <div className="switch-container">
                <label>
                    <input ref="switch" checked={ this.state.isChecked } onChange={ this._handleChange } className="switch" type="checkbox" />
                    <div>
                        <span><g className="icon icon-toolbar grid-view"></g></span>
                        <span><g className="icon icon-toolbar ticket-view"></g></span>
                        <div></div>
                    </div>
                </label>
            </div>
        );
    }


    _handleChange () {
		this.setState( { isChecked: !this.state.isChecked } );
    }

  }

    React.render( <Switch isChecked={ true } />, document.getElementById( "page" ) );
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
