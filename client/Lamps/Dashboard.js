Template.Dashboard.events({
    'click #PA9': function(){
        lampID = Lamp.findOne()._id
        Lamp.update({_id:lampID},{$set:{'tempStatus':2}});
    },
    'click #PA5': function(){
        lampID = Lamp.findOne()._id
        Lamp.update({_id:lampID},{$set:{'tempStatus':1}});
    },
    'click #PA0': function(){
        lampID = Lamp.findOne()._id
        Lamp.update({_id:lampID},{$set:{'tempStatus':0}});
    }
});

Template.Dashboard.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('lamp');
    });

});

Template.Dashboard.helpers({
    GetLampMode: function () {
        lampID = Lamp.findOne()._id
        if(Lamp.findOne({_id:lampID}).tempStatus==2){
            return "Full"
        }
        if(Lamp.findOne({_id:lampID}).tempStatus==1){
            return "Testing"
        }
        if(Lamp.findOne({_id:lampID}).tempStatus==0){
            return "Eco"
        }
    },

});