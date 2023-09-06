import {html, css} from 'lit';
import {property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import { BaseContainer } from './base_container.js';
//import {LitElement} from 'lit';


//@customElement('base-btn')
export class BaseTextInput extends BaseContainer {
  static styles = 
                [
                    css`
                    input {
                        color: inherit;
                        border: none;
                        padding: 0;
                        font: inherit;
                        cursor: pointer;
                        outline: inherit;
                      }
                    
                    `,

                    BaseContainer.styles,
                    css`
                    :host {
                        display: inline-flex;
                        width: 100%;
                    }`

                ];
  @property() type: string = 'text';
  @property() defaultValue: string = '';
  @property() hint: string = '';
  @property({type: Boolean}) notRequired?: Boolean;

//   connectedCallback() {
//     super.connectedCallback();
//     console.log(this.renderRoot);
//     const input = this.renderRoot?.querySelector('input');
//     console.log(input);
//     if (input) {
//       input.addEventListener('input', this.handleInputChange);
//     }
//   }
  
//   disconnectedCallback() {
//     super.disconnectedCallback();
//     const input = this.shadowRoot?.querySelector('input');
//     if (input) {
//       input.removeEventListener('input', this.handleInputChange);
//     }
//   }
  
//   handleInputChange(event: Event) {
//     const inputValue = (event.target as HTMLInputElement).value;
//     if (inputValue.length < 8) {
//       console.log('Invalid');
//     }
//   }
  

  render() {
    const boxShadow = this.setShadow(this.shadow, this.shadowX, this.shadowY, this.shadowDiffuse, 'var(--btn-box-shadow)');

    const styles = {
        padding:         this.padding     || '2vh 4vh 2vh 4vh',
        borderRadius:    this.round       ?  '2vh' : 'var(--btn-border-radius)',
        boxShadow:       boxShadow,
        border:          this.border      || 'none',
        width:           "100%"
    };

    return html`

                <input style=${styleMap(styles)}
                    type = ${this.type}
                    placeholder = ${this.hint} 
                    ${this.defaultValue? `value=${this.defaultValue}` : ''}
                    ${this.notRequired ? '' : 'required'}
                >
                <div></div>
            `;
  }
}

