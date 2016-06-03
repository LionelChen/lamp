Template.Dashboard.events({
    'click #PA9': function(){
        Lamp.update({_id:"hpnC6neKCbs2QtuFq"},{$set:{'tempStatus':2}});
    },
    'click #PA5': function(){
        Lamp.update({_id:"hpnC6neKCbs2QtuFq"},{$set:{'tempStatus':1}});
    },
    'click #PA0': function(){
        Lamp.update({_id:"hpnC6neKCbs2QtuFq"},{$set:{'tempStatus':0}});
    }
});

Template.Dashboard.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('lamp');
    });

});
