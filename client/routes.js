FlowRouter.route('/',{
    name:'home',
    action(){
        if(Meteor.userId()) {
            FlowRouter.go('lamps');
        }else{
            FlowRouter.go('login');
        }
    }
});

FlowRouter.route('/lamps',{
    name:'lamps',
    action(){
        BlazeLayout.render('Lamps')
    }
});

FlowRouter.route('/login',{
    name:'login',
    action(){
        if(Meteor.userId()) {
            FlowRouter.go('lamps');
        }else{
            BlazeLayout.render('MainLayout', {main: 'Login'});
        }
    }
});

FlowRouter.route('/register',{
    name:'register',
    action(){
        BlazeLayout.render('Register')
    }
});

FlowRouter.route('/logout',{
    name:'logout',
    action(){
        Meteor.logout();
        FlowRouter.go('login')
    }
});

FlowRouter.route('/charts',{
    name:'charts',
    action(){
        BlazeLayout.render('Charts')
    }
});

FlowRouter.route('/map',{
    name:'map',
    action(){
        BlazeLayout.render('Map')
    }
});

FlowRouter.route('/dashboard',{
    name:'dashboard',
    action(){
        BlazeLayout.render('Dashboard')
    }
});
