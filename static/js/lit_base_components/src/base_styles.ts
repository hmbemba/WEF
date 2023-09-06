import {css} from 'lit';

export const grow_on_hover = [
    css`
    :host([growOnHover]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover]:hover) {
      transform: scale(1.03);
    }
  `,
  css`
    :host([growOnHover="1"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="1"]:hover) {
      transform: scale(1.01);
    }
  `,
    
  css`
    :host([growOnHover="2"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="2"]:hover) {
      transform: scale(1.02);
    }
  `,
  
  css`
    :host([growOnHover="3"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="3"]:hover) {
      transform: scale(1.03);
    }
  `,
  
  // Continue adding styles for growOnHover="4" to growOnHover="10"
  
  css`
    :host([growOnHover="4"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="4"]:hover) {
      transform: scale(1.04);
    }
  `,
  
  css`
    :host([growOnHover="5"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="5"]:hover) {
      transform: scale(1.05);
    }
  `,
  
  css`
    :host([growOnHover="6"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="6"]:hover) {
      transform: scale(1.06);
    }
  `,
  
  css`
    :host([growOnHover="7"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="7"]:hover) {
      transform: scale(1.07);
    }
  `,
  
  css`
    :host([growOnHover="8"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="8"]:hover) {
      transform: scale(1.08);
    }
  `,
  
  css`
    :host([growOnHover="9"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="9"]:hover) {
      transform: scale(1.09);
    }
  `,
  
  css`
    :host([growOnHover="10"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="10"]:hover) {
      transform: scale(1.1);
    }
  `,
];

export const lighten_on_hover = [css`
:host([lightenOnHover]:hover) {
    opacity: 0.85;
}
`]

export const darken_on_hover = [css`
:host([darkenOnHover]:hover) {
    filter: brightness(85%);
}`]
