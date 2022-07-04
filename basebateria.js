class basebateria extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
     
    :host {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 100px;
      height: 225px;
    }
    :host(.short) .basetripode{
      height: 175px;
    }
    :host(.short) .pata{
      height: 65px;
    }
    :host(.medio) .basetripode{
      height: 225px;
    }
    :host(.alto) .basetripode {
      height: 225px;
    }
    .container {
      position: absolute;
      transform: translateX(46px);

    }
        .basetripode {
          width: 8px;
          height: 240px;
          background: #9e9da3;
          display: flex;
          flex-direction: column;
          justify-content: space-between; 
          align-items: center;
          position: relative;
          
            
        }
        .uniones{
          background: #323232;
          width: 12px;
          height: 10px;
        }
        .uniones.grandes{
          background: #323232;
          width: 20px;
          align-items: center;
        }
        .patas.contenedor{
          position: absolute;
          width: 100px;
          height: 100px;
          bottom: 0;

        }
        .pata { 
          width: 8px;
          height: 85px;
          background: #787878;
          position: absolute;
          bottom: -3px;
          z-index: -1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
        }
        .pata.izquierda{
          background: #555;
          transform: rotate(25deg);
          left: 25px;

        }
        .pata.derecha{
          background: #555;
          transform: rotate(-25deg);
          right: 25px;
        }
     
      `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${basebateria.styles}</style>
      <div class="container">
        <div class="basetripode">
          <div class="uniones"></div>
          <div class="uniones"></div>
          <div class="uniones grandes"></div>
           <div class="contenedor patas">
              <div class="pata izquierda">
              <div class="uniones"></div>
              </div>
              <div class="pata derecha">
              <div class="uniones"></div>
              </div>
           </div>
          <div class="uniones grandes"></div>
        </div>
      </div>`;
  }
}

customElements.define("base-tripode", basebateria);
