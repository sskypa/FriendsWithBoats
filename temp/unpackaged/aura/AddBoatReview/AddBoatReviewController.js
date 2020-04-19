({
    doInit : function(component, event, helper) {
        helper.onInit(component,event,helper);         
    },
    
    onSave : function(component, event, helper) {
        component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));
        component.find("service").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                // record is saved successfully
                var resultsToast = $A.get("e.force:showToast");
                if (resultsToast) {
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    });
                    resultsToast.fire(); 
                }
                else {
                    alert("The record was saved.");
                }
                helper.onInit(component,event,helper);         
                component.getEvent("boatReviewAdded").fire();
                
            } else if (saveResult.state === "INCOMPLETE") {
                // handle the incomplete state
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                // handle the error state
                console.log('Problem saving contact, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        });
    },
    
    onRecordUpdated : function(component, event, helper) {
        var changeType = event.getParams().changeType;
        if (changeType === "ERROR") { /* handle error; do this first! */ }
        else if (changeType === "LOADED") { /* handle record load */ }
            else if (changeType === "REMOVED") { /* handle record removal */ }
                else if (changeType === "CHANGED") {
                    var resultsToast = $A.get("e.force:showToast");
                    if (resultsToast) {
                        resultsToast.setParams({
                            "title": "Updated",
                            "message": "The record was updated."
                        });
                        resultsToast.fire(); 
                    }
                    else {
                        alert("The record was updated.");
                    }
                    /* handle record change; reloadRecord will cause you to lose your current record, including any changes you’ve made */
                    component.find("service").reloadRecord();}
    },
})