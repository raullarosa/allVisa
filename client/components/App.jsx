const arr = [
    {
        name: "Joel",
        color: "red",
        id: "0"
    },
    {
        name: "Raul",
        color: "blue",
        id: "1"
    },
    {
        name: "Carlos",
        color: "Green",
        id: "2"
    }
]


App = React.createClass({
    render() {
        return (
            <div>
                Hello world
                {this.renderText() }
                <SwitchButton/>
            </div>
        )
    },


    renderText() {
        return arr.map((obj) => {
            return <Text text={obj.name} color={obj.color} key={obj.id} />
        })
    }



});


