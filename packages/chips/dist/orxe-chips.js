var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './chips-css';
let OrxeChips = class OrxeChips extends LitElement {
    constructor() {
        super();
    }
    render() {
        return html `
    <div class="main">
        <div data-testid="chips-container" class="container" @click="${this.addDynamicClass}">
          ${this.renderLeftLabel()}${this.renderRightNumber()}
        </div>
    </div>
    `;
    }
    renderLeftLabel() {
        return html `
          <label class="label-text">${this.chipContent}</label>
    `;
    }
    renderRightNumber() {
        return html `
         <label class="label-number">${this.chipCounter}</label>
    `;
    }
    addDynamicClass() {
        this.chipSelected = !this.chipSelected;
    }
};
OrxeChips.styles = styles;
__decorate([
    property({ type: String, attribute: 'chip-content', reflect: true }),
    __metadata("design:type", Object)
], OrxeChips.prototype, "chipContent", void 0);
__decorate([
    property({ type: String, attribute: 'chip-counter', reflect: true }),
    __metadata("design:type", Object)
], OrxeChips.prototype, "chipCounter", void 0);
__decorate([
    property({ type: String, attribute: 'chip-selected', reflect: true }),
    __metadata("design:type", Object)
], OrxeChips.prototype, "chipSelected", void 0);
OrxeChips = __decorate([
    customElement('orxe-chips'),
    __metadata("design:paramtypes", [])
], OrxeChips);
export default OrxeChips;
