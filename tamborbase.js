import "./basebateria.js";
class tamborbase extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
        :host {
            position: relative;
         
        }
        .partes {
            --gradient-tambor: linear-gradient(to right, #a01906 0 20%, #b41d0a 20% 40%, #ca210e 40% 50%, #e52613 50% 70%, #e63911 70% 85%, #e94811 85% 100%);
            --scale: scale(1);
            --y: 0px;
            --x: 0px;
            --rz: 0deg;
            width: 85px;
            position: absolute;
            left: 5px;
            z-index: 5;
            transform: var(--scale) translateY(var(--y)) translateX(var(--x)) rotateZ(var(--rz));

        }
        .tapa {
            width: 100%;
            height: 15px;
            border: 4px solid #D3D3D3;
            background: #fff;
            border-radius: 50%;
            transform: translate(-2px, 15px);
        }

        .medio{
         background: var(--gradient-tambor);
         width: 104%;
         height:36px;
         transform: translate(-2px, px);
         position: relative;
         z-index: -1;
        }

        .base {
            width: 104%;
            height: 25px;
            border: 5px solid #D3D3D3;
            background: var(--gradient-tambor);
            border-radius: 50%;
            position: relative;
            z-index: -2;
            transform: translate(-5px, -17px);
        }
        /* Tom-low */
        :host([type="tom-low"]){
            margin: 0 20px;
        }
        :host([type="tom-low"]) .partes{
           --scale: scale(1.3);
           --y: 25px;
        }
        :host([type="tom-low"]) .medio{
            height: 60px;
        }
        /* Tom-high / Tom-mid */
        :host([type="tom-high"]), :host([type="tom-mid"]) {
            margin: 0 20px;
        }
        :host([type="tom-high"]) .partes{
            --rz: -25deg;
            --y: -16px;

        }
        :host([type="tom-mid"]) .partes{
            --rz: 25deg;
            --y: -16px;

        }

        .animated {
            animation: movepartes 1s ease;
        }
        @keyframes movepartes {
            0%, { transform: var(--scale) translateX(var(--x)) translateY(calc(var(--y) + 2px)) rotateZ(var(--rz));}
            50% {transform: var(--scale) translateX(var(--x)) translateY(calc(var(--y) - 2px)) rotateZ(var(--rz));}
            100% {transform: var(--scale) translateX(var(--x)) translateY(var(--y)) rotateZ(var(--rz));}
        }
        
      `;
  }

  connectedCallback() {
    this.type = this.getAttribute("type") ?? "snare";
    this.sound = new Audio(`sonidos/${this.type}.wav`);
    this.render();
    this.partes = this.shadowRoot.querySelector(".partes");
    this.partes.addEventListener("click", () => this.hit());
  }
  playsound() {
    this.sound.currentTime = 0;
    this.sound.play();
  }

  hit() {
    this.playsound();
    clearTimeout(this.starttimer);
    clearTimeout(this.endtimer);
    this.partes.classList.remove("animated");
    this.starttimer = setTimeout(
      () => this.partes.classList.add("animated"),
      10
    );
    this.starttimer = setTimeout(
      () => this.partes.classList.remove("animated"),
      1250
    );
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${tamborbase.styles}</style>
      <div class="partes">
       <div class="tapa"></div>
       <div class="medio"></div>
       <div class="base"></div>
      </div>
    <base-tripode class="short"></base-tripode>
    
     `;
  }
}

customElements.define("tambores-base", tamborbase);
