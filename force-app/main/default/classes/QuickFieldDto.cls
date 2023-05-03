public without sharing class QuickFieldDto {
    @AuraEnabled
    public QuickColumnDto quickColumn {get; set;}
    @AuraEnabled
    public Object fieldValue {get; set;}

    @AuraEnabled
    public Boolean isError {get; set;}
    @AuraEnabled
    public Boolean isDisabled {get; set;}
}