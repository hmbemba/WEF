import {customElement, property} from 'lit/decorators.js';
import { BaseTextInput } from './base_text_input';


@customElement('password-input')
export class PasswordInput extends BaseTextInput {
    @property() type: string = 'password';

}

