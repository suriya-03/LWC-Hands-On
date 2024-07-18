import { LightningElement,api } from 'lwc';
import BLOODDONOR_OBJ from '@salesforce/schema/Blood_Donor__c'
import NAME_FIELD from '@salesforce/schema/Blood_Donor__c.Name'
import BLOODGROUP_FIELD from '@salesforce/schema/Blood_Donor__c.Blood_Group__c'
import AGE_FIELD from '@salesforce/schema/Blood_Donor__c.Donor_Age__c'
import EMAIL_FIELD from '@salesforce/schema/Blood_Donor__c.E_Mail_ID__c'
import PHONE_FIELD from '@salesforce/schema/Blood_Donor__c.Phone_Number__c'
import LASTDONATEDDATE_FIELD from '@salesforce/schema/Blood_Donor__c.Last_Donated_Date__c'


export default class BloodDonorRecordViewFormCaseStudy extends LightningElement {

   
    @api recordId;

    objectApiName = BLOODDONOR_OBJ;

    name = NAME_FIELD;
    bloodGroup = BLOODGROUP_FIELD;
    age = AGE_FIELD;
    email = EMAIL_FIELD;
    phone = PHONE_FIELD;
    lastDonated= LASTDONATEDDATE_FIELD;



}
