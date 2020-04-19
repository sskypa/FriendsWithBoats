({
	getBoatTypes : function(component) {
		var action = component.get("c.getBoatTypesDB");
        action.setCallback(this, function(result) {
            component.set("v.options",result.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})