public class BoatTypesControllerDB {
    
    @AuraEnabled
    public static List<BoatType__c> getBoatTypesDB() {        
        List<BoatType__c> lstSelectList = new List<BoatType__c>([SELECT Id, Name FROM BoatType__c]);       
		return lstSelectList;
    }            
}