// import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
// import {grow_on_hover} from '../base_styles.js';
// import {styleMap} from 'lit/directives/style-map.js';
import { BaseBtn } from "./base_btn";


@customElement('my-btn')
export class MyBtn extends BaseBtn {
    @property() bgColor = '#EDE9E9';

}

