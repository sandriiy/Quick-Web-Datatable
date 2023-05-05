import { wire, api, track } from 'lwc';

import { getRecord } from "lightning/uiRecordApi";

import USER_ID from '@salesforce/user/Id';
import USER_PROFILE from '@salesforce/schema/User.Profile.Name';
import USER_ROLE from '@salesforce/schema/User.UserRole.Name';

export default class QuickWebDatatable extends LightningElement {
    @api statusMessage;
    @api currentUser;

    @wire(getRecord, {recordId: USER_ID, fields: [USER_PROFILE, USER_ROLE]}) 
    wireuser({error, data}) {
        if (data) {
            this.currentUser = data;
        } else if(error) {
            // process
        }
    }
}