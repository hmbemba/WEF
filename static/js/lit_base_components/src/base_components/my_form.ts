import {html,css} from 'lit';
import { customElement, property} from 'lit/decorators.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import {LitElement} from 'lit';


@customElement('my-form')
export class MyForm extends LitElement {
    static styles = [
        css`
            :host 
            {
              display: inline-block;
            }`
    ];

    @queryAssignedElements({slot: 'items'})
    _kids!: Array<HTMLElement>;

    get_children() {
        const slot = this.shadowRoot?.querySelector('slot');
        
        if (slot){
            return slot.assignedElements({flatten: true});
        }

     
      }
    //   get _children() {
    //     const slot = this.shadowRoot?.querySelector('slot[name=items]');
    //     return slot?.assignedNodes({flatten: true});
    //   }
    reset_error_slot(error_slot:Element | null | undefined){
        if (error_slot){
            error_slot.innerHTML = "";
        }
    }

    get_field_data(item:Element){
        const input         = item.shadowRoot?.querySelector('input');
        const inputValue    = input?.value;
        const fieldName     = item.getAttribute('name');
        return {fieldName, inputValue};
    }

    valid_required(item:Element){
        //const input         = item.shadowRoot?.querySelector('input');
        //const div           = item.shadowRoot?.querySelector('div');
        //const inputValue    = input?.value;

        //const field_name    = item.getAttribute('name');
        var {fieldName, inputValue} = this.get_field_data(item);
        const notRequired   = item.getAttribute('notRequired');
        const error_slot    = this.shadowRoot?.querySelector('slot[name=req_errors]');

        if (notRequired != null){
            this.reset_error_slot(error_slot);
            return true;
        }

        if (!inputValue){
            if (error_slot){
                error_slot.innerHTML += `<li style="color:red; ">${this.cap(fieldName)} is required</li>`;
                return false;
            }
        }
        else{
            this.reset_error_slot(error_slot);
            return true;
        }
    }
    cap(str:string | null | undefined) {
        if (str == null){
            return "";
        }
        return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
      }

    valid_min_len(item:Element){
        //const input      = item.shadowRoot?.querySelector('input');
        //const div        = item.shadowRoot?.querySelector('div');
        //const inputValue = input?.value;

        //const field_name    = item.getAttribute('name');
        var {fieldName, inputValue} = this.get_field_data(item);
        const min_len               = item.getAttribute('minLen');
        const error_slot            = this.shadowRoot?.querySelector('slot[name=req_errors]');


        if (min_len == null){
            return true;
        }

        if (inputValue && min_len){
            if (inputValue.length < parseInt(min_len) && error_slot){
                error_slot.innerHTML += `<li style="color:red; ">${this.cap(fieldName)} must be at least ${min_len} characters long</li>`;

                return false;
        }
        else{
            this.reset_error_slot(error_slot);
            return true;
        }
    }


        // const errMsg = input?.getAttribute('errMsg');
        // if (inputValue){
        //     return this.validate_attrib(inputValue.length < min_len, div!, errMsg!);
        // }
        // else{
        //     return Validity.NOTVALID;
        // }
    }

    validate_form_item(item:Element){
       
        if ( ! this.valid_required(item)){
            //console.log("bad re");
            return false;
        }   
        if ( ! this.valid_min_len(item)){
            //console.log("bad min");
            return false;
        }

        return true;
    }

    get_field_name(item:Element){
        const name = item.getAttribute('name') || "";
        return name;
    }

    get_field_value(item:Element){
        const input = item.shadowRoot?.querySelector('input');
        const value  = input?.value || "";
        return value;
    }
    
    set_form_data(formData:FormData){
        const kids = this._kids[0].children;
        //const formData = new FormData(form);

        for (const kid of kids){
            const fieldName  = this.get_field_name(kid);
            const fieldValue = this.get_field_value(kid);
            //console.log(fieldName, fieldValue);
            if (fieldName && fieldValue){
                formData.set(fieldName, fieldValue);
            }

        }

        const csrf_field = this.shadowRoot?.querySelector('input[type=hidden]');
        const csrf_name  = csrf_field?.getAttribute('name');
        const csrf_value = csrf_field?.getAttribute('value');
        //console.log(csrf_name, csrf_value);
        if (csrf_name && csrf_value){
            formData.set(csrf_name, csrf_value);
        }

    }

    validate() {
        const kids = this._kids[0].children;
        const items_are_valid: Array<boolean> = [];

        for (const kid of kids){
            items_are_valid.push(this.validate_form_item(kid));
        }


        // If all items are valid, submit the form
        if (items_are_valid.every((item) => item === true)){

            const form = this.shadowRoot?.querySelector('form');
            if (form){

                form.addEventListener('formdata', (e) => {
                    e.formData.append('test_from_wc', 'test')
                    this.set_form_data(e.formData);
                    
                  });
                form.submit();
            }
        }
      }
    
      handle_enter(e:KeyboardEvent) {
        if (e.key === 'Enter') {
            this.validate();
        }
        }
      
      
  @property() csrfTokenName?: string;
  @property() csrfToken?: string;

  render() {


    return html`

    <form method="post" @keypress=${this.handle_enter}>

    <input type="hidden" name="${this.csrfTokenName || 'csrf_token'}" value="${this.csrfToken || ''}">

 
    <ul>
        <slot name="req_errors">
        </slot>
    </ul>
    <ul>
        <slot name="min_len_errors">
        </slot>
    </ul>

	
	 <slot name="items">
	 </slot>
     
	 <slot name="submit" @click=${this.validate}>
	 </slot>
		
	</form>
    `;
  }
}


