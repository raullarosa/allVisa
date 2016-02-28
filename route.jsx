FlowRouter.route( '/', {
    name: 'Home',
    action() {
        ReactLayout.render( App);
    }
});