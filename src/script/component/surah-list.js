import './surah-item.js';
 
class SurahList extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }

  set surah(surah) {
    this._surah = surah;
    this.render();
  }
 
  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.shadowDOM.innerHTML = '';
    this._surah.forEach(surah1 => {
      const surah1ItemElement = document.createElement('surah-item');
      surah1ItemElement.surah1 = surah1;
      
      this.shadowDOM.appendChild(surah1ItemElement);
    });
  }
}
 
customElements.define('surah-list', SurahList);