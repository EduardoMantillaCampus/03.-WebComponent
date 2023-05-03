class mySection extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = 
        `
        <div style="background-color:${this.color}">
            <h2>My-section</h2>
        </div>
        `;
        this.style.width="100%";
        this.style.color="#fff";
        this.style.display="flex";
        this.style.justifyContent="center";
        this.style.background="#17A589";
        this.style.alignItems="center";
        this.style.height="50px";
        this.style.fontFamily="sans-serif";
        this.style.width="80%";
        this.style.minHeight="90vh";
    }
}

window.customElements.define("my-section",mySection)