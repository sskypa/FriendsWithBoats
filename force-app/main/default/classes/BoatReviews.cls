public class BoatReviews {

    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId) {
        
        List<BoatReview__c> lstBoatReviews = new List<BoatReview__c>();        
        lstBoatReviews = [select Id, Name, Comment__c, Rating__c, LastModifiedDate, CreatedDate, CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName
         from BoatReview__c 
         where Boat__c = :boatId];
        
        return lstBoatReviews;
    }
}