import {html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import { MyRow } from './my_row.js';


@customElement('my-nav')
export class MyNav extends MyRow {
  static styles = 
                [
                    MyRow.styles,
                    // css`
                    //     :host
                    //     {
                    //         display: block;
                    //     }
                    // `


                ];
    // @property() itemPosH?: string;
  @property({type:Boolean}) sticky?: boolean;
  @property() bgColorOnScroll?: string;

  @state() scrollBgColor?: string;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this.handleScroll);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const bgColorOnScroll = this.getAttribute('bgColorOnScroll');
    if (bgColorOnScroll && window.scrollY > 0) {
      this.scrollBgColor = bgColorOnScroll;
    } else {
      this.scrollBgColor = undefined;
    }
  };


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
                return 'center';

            default:
                return 'normal';
        }
    }

    const styles = {
        padding:         this.padding       || '0px',
        backgroundColor: this.scrollBgColor || this.bgColor, 
        color:           this.textColor     || 'var(--btn-color)',
        borderRadius:    this.round         ?  '2vh' : 'var(--btn-border-radius)',
        boxShadow:       boxShadow,
        //width:           this.w           || 'auto',
        height:          this.h           || 'auto',

        display:         'flex',
        flexDirection:   'row',
        gap:             this.gap         || '1vh',
        justifyContent:  getItemsPosH(this.itemPosH),
        alignItems:      getItemsPosV(this.itemPosV), 
        position:       'static',
        top:            'auto',
        transition:     'background-color 0.5s ease-in-out',

    };



    return html`
                <style>
                    :host
                    {
                        ${this.sticky ? `position: sticky;` : ''}
                        ${this.sticky ? `top: 0;` : ''}

                    }
                </style>
                <div style=${styleMap(styles)}>
                    <slot></slot>
                </div>
            `;
  }
}

