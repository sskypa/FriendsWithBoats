({
    onInit : function(component,event,helper) {
        // Prepare a new record from template
        component.find("service").getNewRecord(
            "BoatReview__c", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.boatReview");
                var error = component.get("v.recordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                
                component.set("v.boatReview.Boat__c","v.boat.Id");
                var temp = component.get("v.boat.Id");
			    console.log("v.boatReview.Boat__c: " + temp);
                //console.log("Record template initialized: " + rec.sobjectType);
            })
        );
    },
})