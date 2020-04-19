({
	doInit : function(component, event, helper) {
		
	},
    
    handleActive : function(component, event, helper) {
        console.log("In handle active method....");
        var BoatReviews = component.find("BoatReviews");
		if(typeof BoatReviews != 'undefined'){
            var auraMethodResult = BoatReviews.refresh();
            console.log("auraMethodResult: " + auraMethodResult);
        }
	},
    
    onBoatSelected : function(component, event, helper) {
		console.log("In the app event handler 2");
        var eventBoat = event.getParam("boat");
        component.set("v.id",eventBoat.Id);
        var tempRec = component.find("service");
		tempRec.set("v.recordId", component.get("v.id"));
		console.log("before Reload Record aaaa");
        tempRec.reloadRecord();      
        console.log("after Reload Record bbb");
	},
    
    onRecordUpdated: function(component, event, helper) {
        var BoatReviews = component.find("BoatReviews");
        if(typeof BoatReviews != 'undefined'){
            var auraMethodResult = BoatReviews.refresh();
            console.log("auraMethodResult: " + auraMethodResult);
        }
	},
	
    onBoatReviewAdded: function(component, event, helper) {
		component.find("boatDetailsTabset").set("v.selectedTabId","boatreviewtab");
        //component.find("boatreviewscmp").refresh();
        console.log("before calling RefreshMethod");
        var BoatReviews = component.find("BoatReviews");
        if(typeof BoatReviews != 'undefined'){
            var auraMethodResult = BoatReviews.refresh();
            console.log("auraMethodResult: " + auraMethodResult);
        }

	},

})