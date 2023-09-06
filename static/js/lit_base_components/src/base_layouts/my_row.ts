import {html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import { BaseContainer } from '../base_components/base_container.js';


@customElement('my-row')
export class MyRow extends BaseContainer {
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
    @property() itemPosH?: string;
    @property() itemPosV?: string;


  render() {
    const boxShadow = this.setShadow(this.shadow, this.shadowX, this.shadowY, this.shadowDiffuse, 'var(--btn-box-shadow)');
    
    const getItemsPosH = (itemPosH: string | undefined) => {
        switch (itemPosH) {
            case '1': 
            case 'space-evenly':  
            case 'evenly':
                return 'space-evenly';

            case '2': 
            case 'space-around':  
            case 'around':
                return 'space-around';

            case '3': 
            case 'space-between': 
            case 'between':
                return 'space-between';

            case '4': 
            case 'flex-end':      
            case 'end':
                return 'flex-end';

            case '5': 
            case 'flex-start':    
            case 'start':
                return 'flex-start';

            case '6': 
            case 'center':
                return 'center';

            default:
                return 'center';
        }
    }


    const getItemsPosV = (itemPosV: string | undefined) => {
        switch (itemPosV) {
            case '1': 
            case 'top':
                return 'start';

            case '2': 
            case 'btm': 
            case 'bottom':
                return 'end';

            case '3': 
            case 'center':
            case 'ctr':
            case 'c':
                return 'center';

            default:
                return 'normal';
        }
    }

    const styles= {
        padding:         this.padding     || '0px',
        //backgroundColor: this.bgColor     || 'var(--btn-bg-color)' ,
        color:           this.textColor   || 'var(--btn-color)',
        borderRadius:    this.round       ?  '2vh' : 'var(--btn-border-radius)',
        boxShadow:       boxShadow,
        //width:           this.w           || 'auto',
        height:          this.h           || 'auto',

        display:         'flex',
        flexDirection:   'row',
        gap:             this.gap         || '1vh',
        justifyContent:  getItemsPosH(this.itemPosH), //this.itemPosH == '1' || this.itemPosH == 'space-evenly' ? 'space-evenly' : this.itemPosH == '2' || this.itemPosH == 'space-around' ? 'space-around' : this.itemPosH == '3' || this.itemPosH == 'space-between' ? 'space-between' : this.itemPosH == '4' || this.itemPosH == 'flex-end' ? 'flex-end' : this.itemPosH == '5' || this.itemPosH == 'flex-start' ? 'flex-start' : this.itemPosH == '6' || this.itemPosH == 'center' ? 'center' : 'center',
        alignItems:      getItemsPosV(this.itemPosV) // == 'top' ? 'start' : this.itemPosV == 'bottom' ? 'end' : this.itemPosV == 'center' ? 'center' : 'normal',


    };



    return html`
                <style>
                    div {

                        background-color: ${this.bgColor ? this.bgColor : 'var(--btn-bg-color)'};
                        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                        ${this.wrap ? `flex-wrap: ${this.getFlexWrap(this.wrap)};` : ''}


                    }
                    div:hover {
                        color:            ${this.textColorOnHover ? this.textColorOnHover : this.textColor ? this.textColor :  'var(--btn-hover-color, inherit)'};
                        background-color: ${this.bgColorOnHover   ? this.bgColorOnHover   : this.bgColor   ? this.bgColor   :  'var(--btn-hover-bg-color)'};
                        ${this.borderOnHover? `outline:${this.borderOnHover}`:''}
                    }

                </style>
                <div style=${styleMap(styles)}>
                    <slot></slot>
                </div>
            `;
  }
}

