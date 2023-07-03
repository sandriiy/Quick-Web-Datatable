global class QuickConfigurationSourcePicklist extends VisualEditor.DynamicPickList {

    global override VisualEditor.DataRow getDefaultValue() {
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('None', 'None');

        return defaultValue;
    }

    global override VisualEditor.DynamicPickListRows getValues() {
        VisualEditor.DynamicPickListRows values = new VisualEditor.DynamicPickListRows();
        List<Configuration__c> configNames = QuickSelector.getAllQuickConfigurations();

        for(Configuration__c config : configNames) {
            VisualEditor.DataRow value = new VisualEditor.DataRow(config.Name, config.Name);
            values.addRow(value);
        }

        if (values.size() == 0) {
            values.addRow(getDefaultValue());
        }

        return values;
    }
}