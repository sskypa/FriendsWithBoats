({
    loadOptions: function (component, event, helper) {
        helper.getBoatTypes(component); 
        var createRecordEvent = $A.get('e.force:createRecord');
        if ( createRecordEvent ) {
            component.set("v.isNewRecordSupported",true);
        }
        
    },
    
    handleNewClick : function (component, event, helper) {
        var createRecordEvent = $A.get('e.force:createRecord');
        if ( createRecordEvent ) {
            var boatType = component.get("v.selectedValue");
            if (boatType != '')
            {
                createRecordEvent.setParams({
                    'entityApiName': 'Boat__c',
                    'defaultFieldValues': {
                        'BoatType__c' : boatType
                    }});
            }
            else {
                createRecordEvent.setParams({
                    'entityApiName': 'Boat__c'
                });
            }
            
            createRecordEvent.fire();
        }
        else
        {
            console.log('Create Record not supported');
        }
    },
    
    onFormSubmit :  function(component, event, helper) {
        var formSubmitEvent = component.getEvent("formSubmit");
        formSubmitEvent.setParams({formData: 
                                   {boatTypeId : component.get("v.selectedValue")}
        }).fire();
        
    },
})