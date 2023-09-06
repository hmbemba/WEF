import {html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import { BaseContainer } from '../base_components/base_container.js';


@customElement('center-div')
export class CenterDiv extends BaseContainer {
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

    @property() gap?: string;
    @property() contentPosition?: string;
    @property() h?: string = '100vh';


  render() {
    const boxShadow = this.setShadow(this.shadow, this.shadowX, this.shadowY, this.shadowDiffuse, 'var(--btn-box-shadow)');

    const styles = {
        padding:         this.padding     || '0px',
        backgroundColor: this.bgColor     || 'var(--btn-bg-color)' ,
        color:           this.textColor   || 'var(--btn-color)',
        borderRadius:    this.round       ?  '2vh' : 'var(--btn-border-radius)',
        boxShadow:       boxShadow,

        display:         'flex',
        alignItems:      'center',
        flexDirection:   'column',
        gap:             this.gap         || 'var(--col-gap, 1vh)',
        justifyContent:  'center', 
        height:          this.h,
        //this.contentPosition == 'top' ? 'flex-start' : this.contentPosition == 'btm' ? 'flex-end' : 'center',
        //alignItems:      this.contentPosition == 'center' ? 'center' : '',


    };

    return html`
                <div style=${styleMap(styles)}>
                    <slot></slot>
                </div>
            `;
  }
}

