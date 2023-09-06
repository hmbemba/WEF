import {html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import { BaseContainer } from '../base_components/base_container.js';


@customElement('my-col')
export class MyCol extends BaseContainer {
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



    const getItemsPosH = (itemPosV: string | undefined) => {
        switch (itemPosV) {
            case '1': 
            case 'left':  
            case 'l':
                return 'start';

            case '2': 
            case 'right':  
            case 'r':
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


    const styles = {
        padding:         this.padding     || '0px',
        backgroundColor: this.bgColor     || 'var(--btn-bg-color)' ,
        color:           this.textColor   || 'var(--btn-color)',
        borderRadius:    this.round       ?  '2vh' : 'var(--btn-border-radius)',
        boxShadow:       boxShadow,

        display:         'flex',
        flexDirection:   'column',
        gap:             this.gap         || 'var(--col-gap, 1vh)',
        //justifyContent:  getItemsPosH(this.itemPosH), //this.itemPosH == '1' || this.itemPosH == 'space-evenly' ? 'space-evenly' : this.itemPosH == '2' || this.itemPosH == 'space-around' ? 'space-around' : this.itemPosH == '3' || this.itemPosH == 'space-between' ? 'space-between' : this.itemPosH == '4' || this.itemPosH == 'flex-end' ? 'flex-end' : this.itemPosH == '5' || this.itemPosH == 'flex-start' ? 'flex-start' : this.itemPosH == '6' || this.itemPosH == 'center' ? 'center' : 'center',
        alignItems:      getItemsPosH(this.itemPosH) // == 'top' ? 'start' : this.itemPosV == 'bottom' ? 'end' : this.itemPosV == 'center' ? 'center' : 'normal',

    };

    return html`
                <style>
                    div{
                        ${this.w ? `width: ${this.w};` : ''}
                        ${this.h ? `height: ${this.h};` : ''}
                        ${this.wrap ? `flex-wrap: ${this.getFlexWrap(this.wrap)};` : ''}

                    }
                </style>
                <div style=${styleMap(styles)}>
                    <slot></slot>
                </div>
            `;
  }
}

