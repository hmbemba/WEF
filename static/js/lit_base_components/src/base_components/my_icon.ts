import {html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
//import { darken_on_hover, grow_on_hover, lighten_on_hover } from '../base_styles';
import { BaseContainer } from './base_container.js';


const burger = html`
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg 
width='100%'
version="1.1" id="Design_here" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
<g>
	<rect x="4" y="5" width="16" height="2"/>
	<rect x="4" y="11" width="16" height="2"/>
	<rect x="4" y="17" width="16" height="2"/>
</g>
</svg>
`;

const arrow_up = html`

<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg 
width='100%'
version="1.1" id="Design_here" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; " xml:space="preserve">
<polygon points="20.707,11.293 12,2.586 3.293,11.293 4.707,12.707 11,6.414 11,20 13,20 13,6.414 19.293,12.707 "/>
</svg>
`;


@customElement('my-icon')
export class MyIcon extends BaseContainer {
    static styles = 
                  [
                      BaseContainer.styles,
                      css`div {cursor: pointer; }`,
                      
                  ];

  @property() type? : string;
  @property() size? : number;
  @property({type:Boolean}) circle?: boolean;

  

  render() {
    const styles = {
        width:           this.size    || '5vh',
        height:          this.size    || '5vh',
        //color: this.color || 'var(--icon-color)',
        backgroundColor: this.bgColor || 'var(--icon-bg-color)',
        borderRadius:    this.circle  ?  '100%' : this.round   ?  '2vh' : 'var(--icon-border-radius)',
        padding:         this.padding || '1vh',
        display:         'flex',
        justifyContent:  'center',
        alignItems:      'center',


    };

    let icon = burger; // Default icon

    switch (this.type) {
        case 'burger':
          icon = burger;
          break;
        case 'arrow-up':
            icon = arrow_up;
            break;
  
        default:
          icon = burger;
      }
  
      return html`<div style=${styleMap(styles)}>${icon}</div>`;
  }
}