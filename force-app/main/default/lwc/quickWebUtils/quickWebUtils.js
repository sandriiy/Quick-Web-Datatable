import { ShowToastEvent } from "lightning/platformShowToastEvent";

export { cloneObject, showToast, buildModeDatatableStyle }

const cloneObject = (obj) => {
    if (!obj) {
        return null;
    }
    return JSON.parse(JSON.stringify(obj));
};

const showToast = (context, title, message, variant) => {
    const evt = new ShowToastEvent({
        title: title,
        message: message,
        variant: variant,
    });
    context.dispatchEvent(evt);
};

const buildModeDatatableStyle = (context, mode) => {

};