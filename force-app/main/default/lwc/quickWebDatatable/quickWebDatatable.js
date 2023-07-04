import { LightningElement, wire, api, track } from 'lwc';

import { getRecord } from "lightning/uiRecordApi";

import getConfigurationByName from '@salesforce/apex/QuickDatatableController.getConfigurationRecordByName';

import USER_ID from '@salesforce/user/Id';
import USER_PROFILE from '@salesforce/schema/User.Profile.Name';
import USER_ROLE from '@salesforce/schema/User.UserRole.Name';

export default class QuickWebDatatable extends LightningElement {
    @api statusMessage = [];
    @api currentUser;
    @api configName;
    
    @track configRecord;

    @wire(getRecord, {recordId: USER_ID, fields: [USER_PROFILE, USER_ROLE]}) 
    wireuser({error, data}) {
        if (data) {
            this.currentUser = data;
        } else if(error) {
            this.statusMessage.push(error.body.message);
        }
    }

    @wire(getConfigurationByName, {configName: '$configName'}) 
    wireuser({error, data}) {
        if (data) {
            this.configRecord = data;
        } else if(error) {
            this.statusMessage.push(error.body.message);
        }
    }

    get configDisplayModeName() {
        return (
            this.configRecord != undefined 
            ? this.configRecord.DisplayMode__c
            : undefined
        );
    }
}