import {html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import { BaseContainer } from './base_container.js';


@customElement('base-btn')
export class BaseBtn extends BaseContainer {
  static styles = 
                [
                    css`
                        button {
                            border: none;
                            padding: 0;
                            font: inherit;
                            cursor: pointer;
                            outline: inherit;
                        }
                    `,
                    BaseContainer.styles,
                    css`
                    :host 
                    {
                      display: block;
                    }`



                ];


  render() {
    const boxShadow = this.setShadow(this.shadow, this.shadowX, this.shadowY, this.shadowDiffuse, 'var(--btn-box-shadow)');

    const styles = {
        padding:         this.padding     || '2vh 4vh 2vh 4vh',
        borderRadius:    this.borderRadius? this.borderRadius : this.round ?  '2vh' : 'var(--btn-border-radius)',
        boxShadow:       boxShadow,
        border:          this.border      || 'none'


    };

    return html`
                <style>
                    button {
                        color: ${this.textColor || 'var(--btn-color, inherit)'};
                        background-color: ${this.bgColor ? this.bgColor : 'var(--btn-bg-color)'};
                        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                        ${this.w ? `width: ${this.w};` : ''}
                    }
                    button:hover {
                        color:            ${this.textColorOnHover ? this.textColorOnHover : this.textColor ? this.textColor :  'var(--btn-hover-color, inherit)'};
                        background-color: ${this.bgColorOnHover   ? this.bgColorOnHover   : this.bgColor   ? this.bgColor   :  'var(--btn-hover-bg-color)'};
                        ${this.borderOnHover? `outline:${this.borderOnHover}`:''}
                    }

                    :host{
                        ${this.fbase ? `flex-basis: ${this.fbase};` : ''}
                    }

                </style>
                <button style=${styleMap(styles)}>
                    <slot></slot>
                </button>
            `;
  }
}

