class tamborbombo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
        :host {
         position: relative;
         transform: translate(0, 65px);

        }
        .bombo{
            width: 170px;
            height: 170px;
            background: #e5e5e5;
            border-radius: 50%;
            border: 8px solid #b7b5b6;
            box-shadow: 
               20px -20px 0px #cecccd inset,
               12px -10px 0px 2px  #ca210e;
        }

        .animated {
            animation: movebombo 1s ease;
        }
        @keyframes movebombo {
            0%, { transform: translateX(4px)}
            50% {transform: translateX(-4px)}
            100% {transform: translateX(0)}
        }        

     `;
  }

  connectedCallback() {
    this.type = this.getAttribute("type") ?? "kick";
    this.sound = new Audio(`sonidos/${this.type}.wav`);
    this.render();
    this.bombo = this.shadowRoot.querySelector(".bombo");
    this.bombo.addEventListener("click", () => this.hit());
  }

  playsound() {
    this.sound.currentTime = 0;
    this.sound.play();
  }

  hit() {
    this.playsound();
    clearTimeout(this.starttimer);
    clearTimeout(this.endtimer);
    this.bombo.classList.remove("animated");
    this.starttimer = setTimeout(
      () => this.bombo.classList.add("animated"),
      10
    );
    this.starttimer = setTimeout(
      () => this.bombo.classList.remove("animated"),
      1250
    );
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
        <style>${tamborbombo.styles}</style>
    
       <div class="bombo"></div>

     `;
  }
}

customElements.define("tambores-bombo", tamborbombo);
