({
	search : function(component, event, helper) {
        console.log("BSRController: search called");
        var params = event.getParam('arguments');
        console.log("boatTypeId extracted: " + params.boatTypeId);
        component.set("v.boatTypeId", params.boatTypeId);
		helper.onSearch(component,params.boatTypeId);
	},
    
    doSearch : function(component, event, helper) {        
        helper.onSearch(component,component.get("v.boatTypeId"));
    },

    
    onBoatSelect : function(component, event, helper) {
        console.log("In the event handler");
        var eventBoatId = event.getParam("boatId");
        component.set("v.selectedBoatId",eventBoatId);
      
    },
})