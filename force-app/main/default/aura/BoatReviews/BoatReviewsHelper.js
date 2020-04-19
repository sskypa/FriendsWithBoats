({
    onInit : function(component) {
        var boat = component.get("v.boat");
        var action=component.get("c.getAll");
        action.setParams({"boatId" : boat.Id});
        console.log("boatId: " + boat.Id);

        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.boatReviews", response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " +
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        }
                          );
        $A.enqueueAction(action);
        
    },
})