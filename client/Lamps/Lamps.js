Template.Lamps.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('lamp');
    });

});

Template.Lamps.events({
    'click #AddLampButton': function(){
        Session.set('CreatingNewLamp', true);
    }
});

Template.Lamps.helpers({
    lamp: function () {
        options = {
            sort: {
                createdAt: -1
            }
        };
        if(Lamp.find({creator:Meteor.userId()}, options)){
            return Lamp.find({creator:Meteor.userId()}, options)
        }else if(Lamp.find({owner:Meteor.userId()}, options)){
            return Lamp.find({owner:Meteor.userId()}, options)
        }
    },
    isUserConstructor:function(){
        if(Meteor.users.findOne().profile.roles == "施工"){
            return true;
        }else{
            return false;
        }
    },
    isUserManager:function(){
        if(Meteor.users.findOne().profile.roles == "管理"){
            return true;
        }else{
            return false;
        }
    },
    CreatingNewLamp:function(){
        return Session.get('CreatingNewLamp')
    },
});
