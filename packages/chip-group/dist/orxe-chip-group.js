var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement, LitElement } from 'lit-element';
import styles from './chip-group-css';
import '@my-first-project/chips';
let OrxeChipGroup = class OrxeChipGroup extends LitElement {
    render() {
        return html `<div @click="${this.onChipSelectedHandler}"><slot></slot></div>`;
    }
    onChipSelectedHandler(event) {
        let elems = event.target.parentNode.querySelectorAll("orxe-chips");
        for (var i = 0; i < elems.length; i++) {
            elems[i].setAttribute('chip-selected', 'false');
        }
        setTimeout(() => {
            event.target.setAttribute('chip-selected', 'true');
        }, 5);
    }
};
OrxeChipGroup.styles = styles;
OrxeChipGroup = __decorate([
    customElement('orxe-chip-group')
], OrxeChipGroup);
export default OrxeChipGroup;
