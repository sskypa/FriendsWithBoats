({
    onBoatClick : function(component, event, helper) {
        var compEvent = component.getEvent("BoatSelect");
        console.log("BoatSelected" + component.get("v.boat.Id"));
        compEvent.setParams({"boatId" : component.get("v.boat.Id")}
                                  ).fire();
        console.log("Component Event fired" + component.get("v.boat.Id"));
      
        //var appEvent = component.getEvent("BoatSelected");
		var appEvent = $A.get("e.c:BoatSelected");

        console.log("BoatSelected" + component.get("v.boat.Id"));
        appEvent.setParams({"boat" : component.get("v.boat")}
                                  ).fire();
        console.log("Application Event fired xxx" + component.get("v.boat.Id"));
        
        //var appEvent = component.getEvent("BoatSelected");
		var mapEvent = $A.get("e.c:PlotMapMarker");
        
        mapEvent.setParams({"sObjectId" : component.get("v.boat.Id"),
                            "lat" : component.get("v.boat.Geolocation__latitude__s"),
                             "long" : component.get("v.boat.Geolocation__longitude__s"),
                             "label" : component.get("v.boat.Name")                            
                           }
                                  ).fire();
        console.log("Map Event fired zzz" );
        
        
    }
})