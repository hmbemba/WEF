import {html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import { BaseContainer } from './base_container.js';


@customElement('base-card')
export class BaseCard extends BaseContainer {
  static styles = 
                [
                    BaseContainer.styles,
                    css`
                        :host
                        {
                            display: block;
                        }
                    `
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
                    div {
                        color: ${this.textColor || 'var(--btn-color, black)'};
                        background-color: ${this.bgColor ? this.bgColor : 'var(--btn-bg-color)'};
                        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                    }
                    
                    div:hover {
                        color:            ${this.textColorOnHover ? this.textColorOnHover : this.textColor ? this.textColor :  'var(--btn-hover-color, black)'};
                        background-color: ${this.bgColorOnHover   ? this.bgColorOnHover   : this.bgColor   ? this.bgColor   :  'var(--btn-hover-bg-color)'};
                    }

                </style>
                <div style=${styleMap(styles)}>
                    <slot></slot>
                </div>
            `;
  }
}

