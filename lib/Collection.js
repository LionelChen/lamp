Lamp = new Mongo.Collection('lamp');
LampStatus = new Mongo.Collection('lamp_status')

Lamp.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
});

LampStatus.allow({
    update: function(userId, doc){
        return !!userId;
    }
});

LampSchema = new SimpleSchema({
    owner:{
        type: String,
        label: '拥有者'
    },
    createdAt:{
        type: Date,
        label: '创建日期',
        autoValue: function(){
            return new Date;
        },
        autoform:{
            type:'hidden'
        },
        optional:true
    },
    lamptype:{
        type:String,
        label: '路灯类型',
        allowedValues: ["HID","LED"],
    },
    locationtype:{
        type:String,
        label: '安装地点类型',
        allowedValues: ["交通干道","辅道","广场","园区"]
    },
    important:{
        type:Boolean,
        label:'是否重要',
        autoform: {
            type: "boolean-radios",
            trueLabel: "是",
            falseLabel: "否",
            value: false
        }
    },
    geo_latitude:{
        type:Number,
        decimal:true
    },
    geo_longitude:{
        type:Number,
        decimal:true
    },
    creator:{
        type:String,
        label: '创建人',
        autoValue: function(){
            return this.userId;
        },
        autoform:{
            type:'hidden'
        },
        optional:true
    },
});
Lamp.attachSchema(LampSchema);

LampStatusSchema = new SimpleSchema({
    _id:{
        type: String,
        label: '灯ID'
    },
    capacity:{
        type:Number
    },
    managementGroup:{
        type:Number
    }
});
LampStatus.attachSchema(LampStatusSchema)

Schema = {};
UserProfile = new Mongo.Collection("userprofile");

Meteor.users.allow({
    update: function(userId, doc) {
        return !!userId;
    }
});

Schema.UserProfile = new SimpleSchema({
    roles:{
        type: String,
        label:"职责"
    },
    emailAddress:{
        type:String,
        regEx: SimpleSchema.RegEx.Email
    },
    lastForgotPasswordKey:{
        type:String,
        optional: true
    },

});

Schema.users = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    }
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    /*
     heartbeat: {
     type: Date,
     optional: true
     }
     */
});

Meteor.users.attachSchema(Schema.users);