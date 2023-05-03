class myNav extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = 
        `
        <div>
            <h2>My-Nav</h2>
        </div>
        `;
        this.style.width="100%";
        this.style.color="#fff";
        this.style.display="flex";
        this.style.justifyContent="center";
        this.style.background="#2E86C1";
        this.style.alignItems="center";
        this.style.height="50px";
        this.style.fontFamily="sans-serif";
        this.style.width="20%";
        this.style.minHeight="90vh";
    }
}

window.customElements.define("my-nav",myNav)