import { LitElement, html, css} from 'lit';

/**
 * Card UI Component 
 */
export class QuiCard extends LitElement {
    
    static styles = css`
        .actionable:hover {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        }

        .card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid var(--lumo-contrast-10pct, hsla(214, 57%, 24%, 0.1));
            border-radius: 4px;
            filter: brightness(90%);
            color: var(--lumo-contrast, hsla(214, 35%, 15%, 1.0));
        }

        .card-header {
            font-size: var(--lumo-font-size-l, 1.125rem);
            line-height: 1;
            height: 25px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 5px 10px 5px 10px; 
            background-color: var(--lumo-contrast-5pct, hsla(214, 61%, 25%, 0.05));
            border-bottom: 1px solid var(--lumo-contrast-10pct, hsla(214, 57%, 24%, 0.1));
            color: var(--lumo-contrast, hsla(214, 35%, 15%, 1.0));
        }

        .card-footer {
            color: var(--lumo-contrast-50pct, hsla(214, 45%, 20%, 0.52));
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }`;

    static properties = {
        header: {type: String},
        footer: {type: String},
        width: {state: true},
        actionable: {type: Boolean},
    };

    constructor(){
        super();
        this.width = "100%";
        this.actionable = false;
    }

    connectedCallback() {
        super.connectedCallback()
    }
    
    render() {
        let c = "card";
        if(this.actionable){
            c = "card actionable";
        }

        return html`<div class="${c}" style="width: ${this.width};">
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