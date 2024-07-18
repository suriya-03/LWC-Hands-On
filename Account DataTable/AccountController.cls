/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 07-18-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getaccountList()
    {
        List<Account> accList = [SELECT Name,Rating,AnnualRevenue,Type,Industry FROM Account 
        Order By createdDate DESC LIMIT 10];

        sObjectAccessDecision recs = security.stripInaccessible(AccessType.Readable, accList);
        return recs.getRecords();
    }
    @AuraEnabled
    public static void deleteAccounts(List<Id> accountIds){
        List<Account> accountDeleteList = [SELECT Id FROM Account where Id IN : accountIds];
        try 
        {
            if(!accountDeleteList.isEmpty())
            {
                delete accountDeleteList;
            }
        } 
        catch (Exception e) 
        {
            throw new AuraHandledException(e.getMessage());
        }
    }

}