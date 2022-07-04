import "./basebateria.js";

class Platillodorado extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
    :host(.alto) .basetripode {
      height: 225px;
    }
  
    .container{
            position: relative;
            transform: translate(45px);
            
        }
        .obliquo{
            background: #9e9da3;
            width: 8px;
            height: 150px;
            position: absolute;
            transform: translateY(-75px) rotate(-55deg) translateY(-27px);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .union{
            background: #323232;
            width: 8px;
            height: 20px;
            position: absolute;
            transform: translateY(30px);
        }
        .barilla{
            background: #9e9da3;
            width: 6px;
            height: 18px;
            align-self: flex-start;
            transform: translate(5px, -11px) rotate(55deg);

        }
        .ride{
            --rotate: -2deg;
            background: #e7b92f;
            width: 132px;
            height: 32px;
            position: absolute;
            border-radius: 50%;
            top: -84px;
            left: -145px;
            z-index: -1;
            box-shadow: -18px -4px 2px #c9a024 inset;
            transform: rotate(var(--rotate));
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .inner-gap{
            width: 32px;
            height: 10px;
            border-top: 3px solid #c9a024;
            border-radius: 50%;
        }
        .animated {
            animation: moveride 1s ease;
        }
        @keyframes moveride {
            6%, 100% { transform: rotate(-8deg);}
            58% {transform: rotate(8deg);}
            100% {transform: rotate(-2deg);}
        }
      `;
  }

  connectedCallback() {
    this.type = this.getAttribute("type") ?? "ride";
    this.sound = new Audio(`sonidos/${this.type}.wav`);
    this.render();
    this.ride = this.shadowRoot.querySelector(".ride");
    this.ride.addEventListener("click", () => this.hit());
  }
  playsound() {
    this.sound.currentTime = 0;
    this.sound.play();
  }
  
  hit() {
    this.playsound();
    clearTimeout(this.starttimer);
    clearTimeout(this.endtimer);
    this.ride.classList.remove("animated");
    this.starttimer = setTimeout(() => this.ride.classList.add("animated"), 10);
    this.starttimer = setTimeout( () => this.ride.classList.remove("animated"), 1250 );
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${Platillodorado.styles}</style>
      <div class="container">
        <div class="obliquo">
        <div class="union"></div>
        <div class="barilla"></div>
        </div>
          <div class="ride">
          <div class="inner-gap"></div>
          </div>
      </div>
      <base-tripode class="alto"></base-tripode>
     `;
  }
}

customElements.define("platillos-dorados", Platillodorado);
