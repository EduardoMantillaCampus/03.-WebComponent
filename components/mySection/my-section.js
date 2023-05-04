let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");

import config from '../../Config/config.js';

export default class MySection extends HTMLElement {
    static url = import.meta.url
    static async components(){
        return await (await fetch(config.uri(MySection.url))).text();
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
        alert("Estoy recibiendo un click del boton del section");
        e.preventDefault()
    }
    connectedCallback(){
        Promise.resolve(MySection.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.MySection = this.shadowRoot.querySelector("#buttonSection");
            this.MySection.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(MySection.url), MySection);