import {html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import { BaseContainer } from '../base_components/base_container.js';


@customElement('my-cols')
export class MyCols extends BaseContainer {
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

    
    @property() numCols: string = '3';
    @property() gap?: string;
    //@property() contentPosition?: string;


  render() {
    const boxShadow = this.setShadow(this.shadow, this.shadowX, this.shadowY, this.shadowDiffuse, 'var(--btn-box-shadow)');


    // https://www.w3schools.com/css/css3_multiple_columns.asp
    const styles = {
        padding:         this.padding     || '0px',
        backgroundColor: this.bgColor     || 'var(--btn-bg-color)' ,
        color:           this.textColor   || 'var(--btn-color)',
        borderRadius:    this.round       ?  '2vh' : 'var(--btn-border-radius)',
        boxShadow:       boxShadow,

        columnCount:     this.numCols     || 'var(--col-num-cols)',
        columnGap:       this.gap         || '1vh',

    };


    return html`
                <style>
                    div {
                        ${this.hideOn ? this.showOnParser(this.hideOn) : ''}

                    }
                </style>
                <div style=${styleMap(styles)}>
                    <slot></slot>
                </div>
            `;
  }
}

