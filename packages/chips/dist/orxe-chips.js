var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement } from 'lit-element';
import styles from './chips-css';
let OrxeChips = class OrxeChips extends LitElement {
    constructor() {
        super();
        this.labels = [
            {
                name: 'Label 1',
                count: 8.7,
            },
            {
                name: 'Label 2',
                count: 6.7,
            },
            {
                name: 'Label 3',
                count: 5.7,
            },
            {
                name: 'Label 4',
                count: 9.7,
            },
            {
                name: 'Label 5',
                count: 9.7,
            },
            {
                name: 'Label 6',
                count: 9.7,
            },
        ];
    }
    render() {
        return html `
    <div class="main">${this.labels.map((currentelement) => html `
        <div data-testid="chips-container" class="container" @click="${this.addDynamicClass}">
          <label class="label-text">${currentelement.name}</label>
          <label class="label-number">${currentelement.count}</label>
        </div>
        `)}
    </div>
    `;
    }
    addDynamicClass(event) {
        let elems = event.currentTarget.parentNode.querySelector(".active");
        console.log(elems);
        if (elems !== null) {
            elems.classList.remove("active");
        }
        event.currentTarget.className += " active";
    }
};
OrxeChips.styles = styles;
OrxeChips = __decorate([
    customElement('orxe-chips'),
    __metadata("design:paramtypes", [])
], OrxeChips);
export default OrxeChips;
