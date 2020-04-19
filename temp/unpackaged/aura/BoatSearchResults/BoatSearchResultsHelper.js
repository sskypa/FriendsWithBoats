({
	onSearch : function(component,boatTypeId) {
		var action = component.get("c.getBoats");
        //var boatTypeId = component.get("v.boatTypeId");
        console.log("Boat Type for controller :" +boatTypeId )
        action.setParams({ boatTypeId : boatTypeId });
        action.setCallback(this, function(result) {
            var state = result.getState();
            if(state == "SUCCESS") {
                console.log("result.getReturnValue() " + result.getReturnValue());
                component.set("v.boats", result.getReturnValue());
            } else {
                console.log("Failed with state: " + state);
        }

        });
        $A.enqueueAction(action);
	}
})