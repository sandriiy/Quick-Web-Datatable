global without sharing class QuickDatatableController {
    @AuraEnabled(cacheable=true)
    global static Configuration__c getConfigurationRecordByName(String configName) {
        return QuickSelector.getConfigurationRecordByName(configName);
    }
}