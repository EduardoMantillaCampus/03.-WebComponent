class headerComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = 
        `
        <div style="background-color:${this.color}">
            <h2>My-Header</h2>
        </div>
        `;
        this.style.width="100%";
        this.style.color="#fff";
        this.style.display="flex";
        this.style.justifyContent="center";
        this.style.background="#2E4053";
        this.style.alignItems="center";
        this.style.height="50px";
        this.style.fontFamily="sans-serif";
        this.style.minHeight="10vh";
    }
}

window.customElements.define("header-component",headerComponent)