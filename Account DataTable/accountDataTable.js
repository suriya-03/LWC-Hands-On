import {LightningElement,wire,track} from 'lwc';
import  getaccountList from '@salesforce/apex/AccountController.getaccountList'
import { updateRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import {refreshApex} from '@salesforce/apex'
import deleteAccounts from '@salesforce/apex/AccountController.deleteAccounts'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class DataTable extends LightningElement 
{
    
    accountList;
    wiredAccountsList;
    saveDraftValues;
    @track selectedRows = [];
    @track isModalOpen = false;
    objectApiName = ACCOUNT_OBJECT;
    disable = true;
    
    @wire(getaccountList)
    getaccountListHandler(response)
    {
        this.wiredAccountsList = response;
        if(response.data)
            {
                this.accountList = response.data
               
            }
    }
    handleSave(event)
    {
    
        this.saveDraftValues = event.detail.draftValues
        console.log(this.saveDraftValues)
        console.log(JSON.stringify(this.saveDraftValues))
        const vals = JSON.parse(JSON.stringify(this.saveDraftValues))
        console.log(vals)
        const modVal= this.saveDraftValues.map(val=>{
            console.log(val);
            return {fields : val}
        })
        console.log(JSON.stringify(modVal));
        const promises = modVal.map(recordInput=>updateRecord(recordInput))
        Promise.all(promises)
        //showToast - display message after update all the records.
        .then(response=>{
            this.dispatchEvent(new ShowToastEvent({
                title : 'Record Updation',
                message : 'Record updated',
                variant : 'success'
            }))
            this.saveDraftValues = [];
            refreshApex(this.wiredAccountsList);
        })
        .catch(error=>{
            this.dispatchEvent(new ShowToastEvent({
                title   : 'Record Updation',
                message : 'Failed to Update',
                variant : 'error'
            }))
            
        })
    }
    columnsList = [
        {label : 'Name', fieldName : 'Name', editable : true},
        {label : 'Annual Revenue', fieldName :'AnnualRevenue',
editable : true},
        {label : 'Rating', fieldName : 'Rating',editable : true},
        {label : 'Type',fieldName:'Type',editable : true},
        {label : 'Industry', fieldName : 'Industry',editable : true}
    ]
    handleSelect(event)
    {
        this.selectedRows = event.detail.selectedRows;
        if(this.selectedRows.length > 0)
        {
                this.disable = false;
        }
        else
        {
                this.disable = true
        }
        console.log(JSON.stringify(this.selectedRows));
    }
    handleDelete(event)
    {
        const selectedIds = this.selectedRows.map(row=>row.Id);
        deleteAccounts({accountIds : selectedIds})
        .then(response=>{
            this.dispatchEvent(new ShowToastEvent({
                title : 'Record Deleted',
                message : 'Record Deleted Successfully',
                variant : 'success'
            }))
            console.log(JSON.stringify(this.selectedRows));
            refreshApex(this.wiredAccountsList);
        })
        .catch(error=>{
            this.dispatchEvent(new ShowToastEvent({
                title   : 'Record Deleted',
                message : 'Failed to Delete',
                variant : 'error'
            }))
            console.error('Error deleting account ', error);
        })
    }
    handleNew(event)
    {
        this.isModalOpen = true;
    }
    handleCloseModal() {
        this.isModalOpen = false;
    }
    handleSuccess(event) {
        console.log(event);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Account Created Successfully',
                message: 'Record Id ' + event.detail.id,
                variant: 'success',
            }),
        );
        this.isModalOpen = false;
        refreshApex(this.wiredAccountsList);
    }
}
