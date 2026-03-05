import { LitElement, html, css} from 'lit';

/**
 * Card UI Component
 */
export class QuiCard extends LitElement {

    static styles = css`
        .card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid var(--lumo-contrast-10pct, hsla(214, 57%, 24%, 0.1));
            border-radius: 10px;
            color: var(--lumo-contrast, hsla(214, 35%, 15%, 1.0));
            box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
            transition: box-shadow 0.2s ease, transform 0.2s ease, opacity 0.2s ease;
        }

        .actionable:hover {
            box-shadow: 0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08);
            transform: translateY(-2px);
        }

        .inactive {
            opacity: 0.75;
        }

        .inactive:hover {
            opacity: 1;
        }

        .card-header {
            font-size: var(--lumo-font-size-l, 1.125rem);
            line-height: 1;
            height: 25px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 10px 14px;
            background-color: var(--lumo-contrast-5pct, hsla(214, 61%, 25%, 0.05));
            border-bottom: 1px solid var(--lumo-contrast-10pct, hsla(214, 57%, 24%, 0.1));
            border-radius: 10px 10px 0 0;
            color: var(--lumo-contrast, hsla(214, 35%, 15%, 1.0));
            font-weight: 500;
        }

        .card-footer {
            color: var(--lumo-contrast-50pct, hsla(214, 45%, 20%, 0.52));
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-radius: 0 0 10px 10px;
        }`;

    static properties = {
        header: {type: String},
        footer: {type: String},
        width: {state: true},
        actionable: {type: Boolean},
        accent: {type: String},
        inactive: {type: Boolean},
    };

    constructor(){
        super();
        this.width = "100%";
        this.actionable = false;
        this.accent = null;
        this.inactive = false;
    }

    connectedCallback() {
        super.connectedCallback()
    }

    render() {
        const classes = ["card"];
        if(this.actionable) classes.push("actionable");
        if(this.inactive) classes.push("inactive");

        const accentStyle = this.accent
            ? `width: ${this.width}; border-left: 3px solid ${this.accent};`
            : `width: ${this.width};`;

        return html`<div class="${classes.join(' ')}" style="${accentStyle}">
                ${this._headerTemplate()}
                <slot name="content"></slot>
                ${this._footerTemplate()}
            </div>`;
    }

    firstUpdated(){

    }

    _headerTemplate() {
        if(this.header){
            return html`<div class="card-header">
                        <div>${this.header}</div>
                    </div>`;
        } else {
            return html`
            <div class="card-header">
                <slot name="header" style="width: ${this.width};"></slot>
            </div>`;
        }
    }

    _footerTemplate() {
        if(this.footer){
            return html`
            <div class="card-footer">
                <div>${this.footer}</div>
            </div>`;
        } else {
            return html`
            <div class="card-footer">
                <slot name="footer" style="width: ${this.width};"></slot>
            </div>`;
        }
    }

}
customElements.define('qui-card', QuiCard);
