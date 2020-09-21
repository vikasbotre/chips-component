import { LitElement } from 'lit-element';
export default class OrxeChips extends LitElement {
    labels: {
        name: string;
        count: number;
    }[];
    constructor();
    render(): import("lit-element").TemplateResult;
    addDynamicClass(event: any): void;
    static styles: import("lit-element").CSSResult;
}
