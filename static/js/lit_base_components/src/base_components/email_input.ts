import {customElement, property} from 'lit/decorators.js';
import { BaseTextInput } from './base_text_input';


@customElement('email-input')
export class EmailInput extends BaseTextInput {
    @property() type: string = 'email';



}

