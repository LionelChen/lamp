const net = require('net');

Meteor.publish('lamp', function () {
    if(Meteor.users.findOne().profile.roles=="施工"){
        return Lamp.find({creator:this.userId});
    }else if(Meteor.users.findOne().profile.roles=="管理"){
        return Lamp.find({owner:this.userId});
        //return Demand.find({'expectation.experience':finderExperience});
    }
});
