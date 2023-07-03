import { LightningElement, api, wire, track } from 'lwc';

import { loadStyle } from 'lightning/platformResourceLoader';
import lwcDatatableLight from '@salesforce/resourceUrl/QuickDatatable_Light';
import lwcDatatableDark from '@salesforce/resourceUrl/QuickDatatable_Dark';

const columns = [
    { label: 'Opportunity name', fieldName: 'opportunityName', type: 'text' },
    { label: 'Contact Email', fieldName: 'contact', type: 'email' },
    { label: 'Contact Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Amount', fieldName: 'amount', type: 'number' },
];

const data = [
    {
        id: 'a',
        opportunityName: 'Cloudhub',
        confidence: 0.2,
        amount: 25000,
        contact: 'jrogers@cloudhub.com',
        phone: '2352235235',
        trendIcon: 'utility:down'
    },
    {
        id: 'b',
        opportunityName: 'Quip',
        confidence: 0.78,
        amount: 740000,
        contact: 'quipy@quip.com',
        phone: '2352235235',
        trendIcon: 'utility:up'
    },
    {
        id: 'c',
        opportunityName: 'Quip',
        confidence: 0.78,
        amount: 740000,
        contact: 'quipy@quip.com',
        phone: '2352235235',
        trendIcon: 'utility:up',
    },
];

export default class QuickDatatable extends LightningElement {
    @api displayName;

    @track initStages = new Map([
        ['styles', false]
    ]);

    @track data = data;
    @track columns = columns;

    renderedCallback() {
        this.initDatatableStyles();
    }

    initDatatableStyles() {
        if (this.isValidInitStage('styles')) {
            switch (this.displayName) {
                case 'Dark':
                    this.loadDatatableStyles(lwcDatatableDark);
                    break;
                case 'Light':
                    this.loadDatatableStyles(lwcDatatableLight);
                    break;
                default:
                    this.statusMessage.push('Getting Display Mode Failed | getConfigDisplayMode');
            } 
            
            this.initStages.set('styles', true);
        }
    }

    loadDatatableStyles(staticResource) {
        loadStyle(this, staticResource).then(()=> {
            this.statusMessage.push('Datatable Styles Loaded Successfully | loadStyle');
        }).catch(error=> { 
            this.statusMessage.push(error.body.message);
        });
    }

    isValidInitStage(name) {
        for (let [key, value] of this.initStages) {
            if (key === name) {
                return true;
            } else {
                if (value === false) {
                    return false;
                }
            }
        }

        return false;
    }
}