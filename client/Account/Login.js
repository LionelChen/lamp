Template.Login.onCreated(function() {
    this.lastError = new ReactiveVar(null);
});

Template.Login.events({

    "submit #login-form" : function(event, template){
        event.preventDefault();
        // retrieve the input field values
        username = template.find('#login-username').value;
        password = template.find('#login-password').value;

        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(username, password, function(err) {
            if (err) {
                template.lastError.set(err.reason);
            }
            else {
                console.log("login success")
            }

            // The user has been logged in.

        });
        return false;
    }
});

Template.Login.helpers({
    errorMessage: function() {
        return Template.instance().lastError.get();
    }
});
