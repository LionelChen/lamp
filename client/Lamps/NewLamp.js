Template.NewLamp.events({
    'submit form': function(event, Newlamp) {
        event.preventDefault();
        var signed_owner = Newlamp.find("#owner").value;
        var signed_lamp_type = Newlamp.find("#lamp-type").value;
        var signed_important = Newlamp.find("#important-Radios").value;
        var signed_location_type = Newlamp.find("#location-type").value;
        if(signed_important=='True'){
            signed_important = true
        }else {
            signed_important = false

        }

        if (navigator.geolocation) {
            // This is the location marker that we will be using on the map. Let's store a reference to it here so that it can be updated in several places.
            var myLat = null;
            var myLng = null;
            var myLocation = null;

            // Get the location of the user's browser using the native geolocation service.
            navigator.geolocation.getCurrentPosition(
                function (position) {

                    // Assign coordinates to global variables
                    myLat = position.coords.latitude;
                    myLng = position.coords.longitude;
                    myLocation = myLat + "," + myLng;

                    // If I alert myLocation here, the coordinates are there.

                    inserNewLamp();
                }
            );
        }

        function inserNewLamp() {
            // If I alert myLocation here, the coordinates are there.
            console.log(myLat);
            console.log(myLng);
            console.log(typeof "h"+myLat)
            console.log(typeof 123.3);
            Lamp.insert({owner:signed_owner,lamptype:signed_lamp_type,
                locationtype:signed_location_type, important:signed_important,
                geo_latitude:myLat, geo_longitude:myLng});
                // Load Google Maps
        }


        Session.set('CreatingNewLamp', false);
    }
});
