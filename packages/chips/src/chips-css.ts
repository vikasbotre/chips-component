import {css} from 'lit-element';
export default css`:host{--chips-background-color:var(--neutral);--chips-border-color-disable-text: var(--disabled-text);--chips-caption-font-size:var(--caption-font-size);--chips-tertiary-color:var(--tertiary-text);--chips-border-radius:var(--border-radius);--chip-font-weight-count:var(--font-weight-semi-bold);--chips-primary-active:var(--primary);--background-main:#eee}*{box-sizing:border-box}:host([chip-selected='true']) .container{color:var(--chips-primary-active);border-color:var(--chips-primary-active)}.main{overflow:auto hidden;white-space:nowrap;margin:auto}.main .container{min-width:auto;max-width:288px;height:36px;background-color:var(--chips-background-color);border:1px solid var(--chips-border-color-disable-text);font-size:var(--chips-caption-font-size);color:var(--chips-tertiary-color);border-radius:var(--chips-border-radius);display:inline-flex;flex-direction:row;cursor:pointer;outline:none;margin:10px}.main .container .label-comman,.main .container .label-text,.main .container .label-number{cursor:inherit;display:flex;align-items:center;white-space:nowrap}.main .container .label-text{padding:12px 16px}.main .container .label-number{padding:12px 16px 12px 10px;font-weight:var(--chip-font-weight-count)}.main::-webkit-scrollbar,.main::-webkit-scrollbar-track,.main::-webkit-scrollbar-thumb{display:none;animation-name:scroll-horizontal;animation-iteration-count:1}@keyframes scroll-horizontal{0%{transition:240ms  ease}100%{transition:80ms  ease}}`;