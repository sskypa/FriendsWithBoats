({
    doInit : function(component, event, helper) {
      var navEvent = $A.get("e.force:navigateToSObject");
          if ( navEvent ) {
            component.set("v.isNaviateToSObjectSupported",true);
        }           
    },
    
    onFullDetails : function(component, event, helper) {
        console.log("In onFullDetails" + component.get("v.boat.Id"));
        var navEvent = $A.get("e.force:navigateToSObject");
        navEvent.setParams({
            recordId: component.get("v.boat.Id"),
            slideDevName: "detail"
        });
        navEvent.fire(); 		
        console.log("In onFullDetails event fired" + component.get("v.boat.Id"));
    },
})