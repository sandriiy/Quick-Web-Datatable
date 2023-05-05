public without sharing class QuickRecordDto {
    @AuraEnabled
    public Integer recordId {get;} // = row number in datatable
    @AuraEnabled
    public List<QuickFieldDto> quickFields {get; set;}
}