import {css, LitElement, CSSResultGroup, html} from 'lit';
import {property, customElement} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';


@customElement('my-text')
export class MyText extends LitElement {
  static styles = [
    css`
        :host 
        {
          display: inline-block;
        }
        :host([disabled]) 
        {
          pointer-events: none;
          opacity: 0.5;
        }
        :host([hidden])
        {
          display: none;
        }

        div{
            margin: 0;
            padding: 0;
        }
	  `,

    ] as CSSResultGroup;

  @property() color?: string;
  @property({type: Boolean}) strike?: Boolean;
  @property({type: Boolean}) underline?: Boolean;
  @property({type: Boolean}) bold?: Boolean;
  @property({type: Boolean}) italic?: Boolean;
  @property({type: Boolean}) smallest?: Boolean;
  @property({type: Boolean}) smaller?: Boolean;
  @property({type: Boolean}) small?: Boolean;
  @property({type: Boolean}) medium?: Boolean;
  @property({type: Boolean}) large?: Boolean;
  @property({type: Boolean}) larger?: Boolean;
  @property({type: Boolean}) largest?: Boolean;
  @property() bgColor?: string;
  @property() padding?: string;
    



  render() {

    const styles = {
        // color: this.color || 'var(--text-color, black)',
        // fontWeight: this.bold ? 'bold' : 'normal',
        // fontStyle: this.italic ? 'italic' : 'normal',
        textDecoration: this.strike ? 'line-through' : this.underline ? 'underline' : 'none',
        //fontSize: this.smallest ? '0.5em' : this.smaller ? '0.75em' : this.small ? '0.9em' : this.medium ? '1em' : this.large ? '1.25em' : this.larger ? '1.5em' : this.largest ? '2em' : '1em',
        fontSize: this.smallest? 'var(--font-smallest, .05em)' : this.smaller ? 'var(--font-smaller, .75em)' : this.small ? 'var(--font-small, .9em)' : this.medium ? 'var(--font-medium, 1em)' : this.large ? 'var(--font-large, 1.25em)' : this.larger ? 'var(--font-larger, 1.5em)' : this.largest ? 'var(--font-largest, 2em)' : 'var(--font-medium, 1em)',
        // backgroundColor: this.bgColor || '',
        FontFace: 'var(--font-face, inherit)',
        padding: this.padding || '0',
    };

    return html`
              <style>
                div{
                  ${this.color ? `color: ${this.color}` : ''};
                  ${this.bold ? `font-weight: bold` : ''};
                  ${this.italic ? `font-style: italic` : ''};
                  ${this.bgColor ? `background-color: ${this.bgColor}` : ''};

                }
              </style>

                <div style=${styleMap(styles)}>
                    <slot></slot>
                </div>
            `;
  }
}
  

