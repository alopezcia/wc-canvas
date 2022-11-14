export class WinWheel extends HTMLElement {
    id = 'canvas';
    width = 434;
    height = 434;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        if( this.hasAttribute('id')){
            this.id = this.getAttribute('id');
        }
        if( this.hasAttribute('width')){
            this.id = this.getAttribute('width');
        }
        if( this.hasAttribute('height')){
            this.id = this.getAttribute('height');
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /* html */`
            <canvas id="${this.id}" width="${this.width}" height="${this.height}">
                <p style="{color: white}" align="center">Sorry, your browser doesn't support canvas. Please try another.</p>
            </canvas>
        `;
    }
}

customElements.define('win-wheel', WinWheel );