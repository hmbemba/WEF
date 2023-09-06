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

                ];


  render() {
    const boxShadow = this.setShadow(this.shadow, this.shadowX, this.shadowY, this.shadowDiffuse, 'var(--btn-box-shadow)');

    const styles = {
        padding:         this.padding     || '2vh 4vh 2vh 4vh',
        //backgroundColor: this.bgColor     || 'var(--btn-bg-color)' ,
        //color:           this.textColor   || 'var(--btn-color, black)',
        borderRadius:    this.round       ?  '2vh' : 'var(--btn-border-radius)',
        boxShadow:       boxShadow,


    };

    return html`
                <style>
                    button {
                        color: ${this.textColor || 'var(--btn-color, black)'};
                        background-color: ${this.bgColor ? this.bgColor : 'var(--btn-bg-color)'};
                        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                    }
                    button:hover {
                        color:            ${this.textColorOnHover ? this.textColorOnHover : this.textColor ? this.textColor :  'var(--btn-hover-color, black)'};
                        background-color: ${this.bgColorOnHover   ? this.bgColorOnHover   : this.bgColor   ? this.bgColor   :  'var(--btn-hover-bg-color)'};
                    }

                </style>
                <button style=${styleMap(styles)}>
                    <slot></slot>
                </button>
            `;
  }
}

