const net = require('net');

Meteor.publish('lamp', function () {
    if(Meteor.users.findOne().profile.roles=="施工"){
        return Lamp.find();
    }else if(Meteor.users.findOne().profile.roles=="管理"){
        return Lamp.find();
        //return Demand.find({'expectation.experience':finderExperience});
    }
});
