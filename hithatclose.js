import "./basebateria.js";

const sound = new Audio("sonidos/hithatc2.wav");
const soundplay = () => {
  sound.currentTime = 0;
  sound.play();
};

class Hithatclose extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `

    :host(.medio) .basetripode {
        height: 180px;
    }
    .cymbals {
        position: absolute;
    }

     .cymbal {
        width: 100px;
        height: 25px;
        background: #e7b92f;
        position: relative;
        z-index: 5;
    }
    .cymbal.top{
        border-radius: 50% 50% 0% 0% / 100% 100% 0% 0%;
        clip-path: polygon(0% 100%, 50% 50%, 100% 100%);
        border-bottom: 1px solid #D6A52E; 
        transform: translatey(-20px);
    }
    .cymbal.bottom{
        border-top: 1px solid #D6A52E;
        border-radius: 0% 0% 50% 50% / 0% 0% 100% 100%;
        clip-path: polygon(0 0, 50% 50%, 100% 0%);
    }
      .cymbals.animated .cymbal.top {
        animation: moveCymbal 0.25s ease;
      }
      @keyframes moveCymbal {
        0%, 100% { transform: translateY(-3px); }
        50% { transform: translateY(0px); }
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.cymbals = this.shadowRoot.querySelector(".cymbals");
    this.cymbals.addEventListener("click", () => this.hit());
  }

  hit() {
    soundplay();
    clearTimeout(this.starttimer);
    clearTimeout(this.endtimer);
    this.cymbals.classList.remove("animated");
    this.starttimer = setTimeout(
      () => this.cymbals.classList.add("animated"),
      100
    );
    this.starttimer = setTimeout(
      () => this.cymbals.classList.remove("animated"),
      1500
    );
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${Hithatclose.styles}</style>
      <div class="cymbals">
       <div class="cymbal top"></div>
       <div class="cymbal bottom"></div>
      </div>
    <base-tripode></base-tripode>
    `;
  }
}
  
  customElements.define("hithat-close", Hithatclose);