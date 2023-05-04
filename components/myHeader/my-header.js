import config from '../../Config/config.js';

export default class MyHeader extends HTMLElement {
    static url = import.meta.url
    static async components(){
        return await (await fetch(config.uri(MyHeader.url))).text();
    }
    
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    handleEvent(e){
        (e.type === "click") ? this.enviarWorker(e) 
        : undefined;
    }

    enviarWorker(e){
        alert("Estoy recibiendo un click del boton del header");
        e.preventDefault()
    }
    connectedCallback(){
        Promise.resolve(MyHeader.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.MyHeader = this.shadowRoot.querySelector("#buttonNavbar");
            this.MyHeader.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(MyHeader.url), MyHeader);