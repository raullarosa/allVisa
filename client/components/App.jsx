 clientData = {}

//invoke the server method
if (Meteor.isClient) {
    Meteor.call("getdocumentID", function(error, results) {
        console.log(results.data);     
    });
}

App = React.createClass({
    render() {
        return (
            <div>
                <Video src="./img/hotair.mp4"/>
                <Header/>
                <Features/>
                <Team/>
            </div>
        )
    }

    

});