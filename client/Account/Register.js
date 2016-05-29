Template.Register.onCreated(function() {
    this.lastError = new ReactiveVar(null);
});

Template.Register.events({
    "submit form": function(event, Register) {
        event.preventDefault();
        Accounts.createUser({
                username: Register.find("#signup-username").value,
                password: Register.find("#signup-password").value,
                profile: {
                    roles:Register.find("#signup-role").value,
                    emailAddress:Register.find("#signup-email").value
                }
            },

            //Roles.addUsersToRoles(Meteor.userId(), "test", 'default-group'),

            function(error) {
                if (error) {
                    Register.lastError.set(error.reason);
                } else {
                    Register.lastError.set(null);
                }
            });
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`


    }
});

Template.Register.helpers({
    errorMessage: function() {
        return Template.instance().lastError.get();
    }
});
