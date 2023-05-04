import config from '../../Config/config.js';

export default class MyNav extends HTMLElement {
    static url = import.meta.url
    static async components(){
        return await (await fetch(config.uri(MyNav.url))).text();
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
        alert("Estoy recibiendo un click del boton del Nav");
        e.preventDefault()
    }
    connectedCallback(){
        Promise.resolve(MyNav.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.MyNav = this.shadowRoot.querySelector("#buttonNav");
            this.MyNav.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(MyNav.url), MyNav);