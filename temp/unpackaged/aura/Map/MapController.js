({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    
    handleMapEvent : function(component,event,helper) {
        var lat = event.getParam("lat");
        var long = event.getParam("long	");
        component.set("v.location", {'latitude' : lat, 'longitude' : long});}
    
})