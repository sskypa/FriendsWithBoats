({
	refresh : function(component,event,helper){
        console.log("refresh called")
        helper.onInit(component);
    },
    doInit : function(component, event, helper) {
		helper.onInit(component);
	},

    onUserInfoClick : function(component, event, helper) {
        var userId = event.currentTarget.getAttribute("data-userid");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({"recordId" : userId});
        navEvt.fire();
    }
  
})