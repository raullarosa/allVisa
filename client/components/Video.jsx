Video = React.createClass({
    
    render() {
        return (
             <div>
                <video className="video" autoPlay loop muted >
                    <source width="100%" src={this.props.src}/>
                </video>
            </div>
        )
    },
    
    
    
})