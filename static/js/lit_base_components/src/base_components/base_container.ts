import { css, LitElement, CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import {
  grow_on_hover,
  lighten_on_hover,
  darken_on_hover,
} from "../base_styles.js";

export class BaseContainer extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
      :host([disabled]) {
        pointer-events: none;
        opacity: 0.5;
      }
      :host([hidden]) {
        display: none;
      }
      :host([resizableX]) {
        resize: horizontal;
        overflow: auto;
      }
      :host([resizableY]) {
        resize: vertical;
        overflow: auto;
      }
    `,

    grow_on_hover,
    lighten_on_hover,
    darken_on_hover,
  ] as CSSResultGroup;

  @property() padding?: string;
  @property() bgColor?: string;
  @property() bgColorOnHover?: string;
  @property() textColor?: string;
  @property() shadow?: number;
  @property() shadowX?: number;
  @property() shadowY?: number;
  @property() shadowDiffuse?: number;
  @property({ type: Boolean }) round = false;
  @property() textColorOnHover?: string;
  @property() w?: string;
  @property() h?: string;
  @property() bkgImg?: string;
  @property() gap?: string;
  @property() flex?: string;
  @property() border?: string;
  @property() borderOnHover?: string;
  @property() borderRadius?: string;
  @property() wrap?: string;
  @property() hideOn?: string;
  @property() fgrow?: string;
  @property() fshrink?: string;
  @property() fbase?: number;

  setShadow = (
    shadow: number | undefined,
    shadowX: number | undefined,
    shadowY: number | undefined,
    shadowDiffuse: number | undefined,
    defaultVar: string
  ): string => {
    if (shadow) {
      //return `${shadowX || '2'}px ${shadowY || '5'}px ${shadow}px rgba(0.1, 0.1, 0.1, ${shadow / 10})`;
      return `${shadowX || "2"}px ${shadowY || "5"}px ${
        shadowDiffuse || "10"
      }px rgba(0.1, 0.1, 0.1, ${shadow / 10})`;
    } else {
      return defaultVar;
    }
  };

  showOnParser = (arg: string | undefined) => {
    let showOn: string = "900px";
    console.log(arg);
    if (arg == "mobile") {
      showOn = "900px";
    }
    if (arg == "tablet") {
      showOn = "1200px";
    }
    if (arg == "desktop") {
      showOn = "1800px";
    }
    return `@media (max-width: ${showOn})
            {
                display: none;
            }`;
  };

  getFlexWrap = (prop: string | undefined) => {
    switch (prop) {
      case "1":
      case "wrap":
      case "yes":
        return "wrap";

      case "2":
      case "nowrap":
      case "no":
        return "nowrap";

      case "3":
      case "reverse":
      case "rev":
        return "reverse";

      case undefined:
      case null:
      case "":
        return "wrap";

      default:
        return "wrap";
    }
  };

  setWidth(){
    return `${this.w ? `width: ${this.w};` : ''}`
  }
}
