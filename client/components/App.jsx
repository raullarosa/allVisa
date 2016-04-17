//invoke the server method

    clientData = []


if (Meteor.isClient) {
    Meteor.call("getdocumentID", function(error, results) {
        let result = results.data;
        console.log(result)
        let document = result.resource.documentID
        let transArr = result.resource.transactionControls;
        let shouldDeclineAll = transArr[0].shouldDeclineAll;
        let Treshold = transArr[0].declineThreshold
        // let time = {start: transArr[0].timeRange.startTime, end: transArr[0].timeRange.endTime}
        let ACTcontrol = transArr[0].controlType 
      
        
        
        clientData.push(shouldDeclineAll) //id: 0 Bool
        clientData.push(Treshold)  //id: 1 Obj
        clientData.push(1200) //id: 2 Obj
        clientData.push(ACTcontrol) //id: 3 string
        
           console.log(clientData)

        
        ReactLayout.render( App);

    });
}


App = React.createClass({
    render() {
        
        return (
            <div>
                <Video src="./img/hotair.mp4"/>
                <Header/>
                <Features data={clientData} />
                <Team/>
            </div>
        )
    }
});