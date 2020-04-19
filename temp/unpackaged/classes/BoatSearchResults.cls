public class BoatSearchResults {
    
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId ) {
        String queryStr = 'select Id, Name, Picture__c, Contact__r.Name from Boat__c ';
        if (boatTypeId != '') {
            queryStr += 'where BoatType__c = \'' + boatTypeId + '\'';            
        }
        List<Boat__c> lstBoats = database.query(queryStr); 
        return lstBoats;
    }
}