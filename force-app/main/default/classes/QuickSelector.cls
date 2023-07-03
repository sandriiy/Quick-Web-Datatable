global without sharing class QuickSelector {
    global static List<Configuration__c> getAllQuickConfigurations() {
        return [
            SELECT Id, Name, InitApexName__c, IsCUDActions__c, DisplayMode__c,
                IsInlineEdit__c, IsLazyDataLoad__c, SObjectType__c, PostActionApexName__c
            FROM Configuration__c
        ];
    }

    global static Configuration__c getConfigurationRecordByName(String name) {
        Configuration__c config = [
            SELECT Id, Name, InitApexName__c, IsCUDActions__c, DisplayMode__c,
                IsInlineEdit__c, IsLazyDataLoad__c, SObjectType__c, PostActionApexName__c
            FROM Configuration__c
            WHERE Name = :name
            LIMIT 1
        ];

        return config;
    }
}