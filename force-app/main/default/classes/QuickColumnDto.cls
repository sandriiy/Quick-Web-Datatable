public without sharing class QuickColumnDto {
    @AuraEnabled
    public String columnName {get; set;} // unique
    @AuraEnabled
    public String columnLabel {get; set;}
    @AuraEnabled
    public String columnHelpText {get; set;}
    @AuraEnabled
    public QuickDatatype columnType {get; set;}

    @AuraEnabled
    public Boolean isSortable {get; set;}
    @AuraEnabled
    public Boolean isClickable {get; set;} // if url
    @AuraEnabled
    public Boolean isEditable {get; set;} // if inline edit
    @AuraEnabled
    public Boolean isHidden {get; set;}
}