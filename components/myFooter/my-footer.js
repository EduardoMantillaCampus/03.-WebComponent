import config from '../../Config/config.js';

export default class MyFooter extends HTMLElement {
    static url = import.meta.url
    static async components(){
        return await (await fetch(config.uri(MyFooter.url))).text();
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
        alert("Estoy recibiendo un click del boton del Footer");
        e.preventDefault()
    }
    connectedCallback(){
        Promise.resolve(MyFooter.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.MyFooter = this.shadowRoot.querySelector("#buttonFooter");
            this.MyFooter.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(MyFooter.url), MyFooter);