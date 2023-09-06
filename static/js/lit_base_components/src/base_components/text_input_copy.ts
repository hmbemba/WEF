import {html} from 'lit';
import { customElement, property} from 'lit/decorators.js';

import {LitElement} from 'lit';

enum Validity {
  VALID = "VALID",
  NOTVALID = "NOTVALID",
}

@customElement('text-input')
export class TextInput extends LitElement {

  @property() type: string = 'text';
  @property() defaultValue: string = '';
  @property() hint: string = '';
  @property({type: Boolean}) notRequired?: Boolean;
  @property() minLen: string = '0';


  // handleInputChange(event: Event) {
  //   const inputValue = (event.target as HTMLInputElement).value;
  //   const div = this.shadowRoot?.querySelector('div');

  //   if (inputValue.length < 8)  {
  //     if (div){
  //     div.innerHTML = 'Invalid';
  //     }
  //   }
  //   else {
  //     if (div){

  //     div.innerHTML = '';
  //     }
  //   }
  // }

  // firstUpdated(){ 
  //   const input = this.shadowRoot?.querySelector('div');
  //   if (input) {
  //     input.addEventListener('input', this.handleInputChange);
  //   }
  // }

  validate_attrib(condition:boolean, div:HTMLElement, errMsg:string){

    if (condition){
    
      div.innerHTML = errMsg
      return Validity.NOTVALID
    }
    else{
    
      div.innerHTML = ""
      return Validity.VALID
    }
  
  }
  
  
  validate_min_len(inputValue: String,min_len:number,div: HTMLElement, errMsg:string){
    return this.validate_attrib((inputValue.length < min_len), div, errMsg)
    
  }
  
  validate(){
      const input = this.shadowRoot?.querySelector('input');
      const div = this.shadowRoot?.querySelector('div');
    
    if (input && div){
    
      this.validate_min_len(input.value,8,div, "Invalid" )
  
    }
    
  
  }
  

  render() {


    return html`

    <input />
    <div></div>

    <slot name="submit" @click=${this.validate}>
    </slot>
    `;
  }
}

