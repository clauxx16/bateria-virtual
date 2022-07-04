class Ride extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    static get styles() {
      return /* css */`
        :host {
         
        }
        
      `;
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = /* html */`
      <style>${Ride.styles}</style>
     `;
    }
  }
  
  customElements.define("platillo-ride", Ride);