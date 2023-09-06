import {customElement, property} from 'lit/decorators.js';
import { BaseTextInput } from './base_text_input';


@customElement('text-input')
export class TextInput extends BaseTextInput {
    @property() type: string = 'text';

}

