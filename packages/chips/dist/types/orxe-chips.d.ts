import { LitElement } from 'lit-element';
export default class OrxeChips extends LitElement {
    chipContent: any;
    chipCounter: any;
    chipSelected: any;
    constructor();
    render(): import("lit-element").TemplateResult;
    renderLeftLabel(): import("lit-element").TemplateResult;
    renderRightNumber(): import("lit-element").TemplateResult;
    addDynamicClass(): void;
    static styles: import("lit-element").CSSResult;
}
