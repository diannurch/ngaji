class SurahItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set surah1(surah1) {
    this._surah1 = surah1;
    this.render();
  }
 
  render() {
    this.shadowDOM.innerHTML = `
    <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin: 15px 0 18px 0;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          background-color: #3f4263;
          color: white;
        }
        .surah-info {
          padding: 24px;
        }
        .surah-info > h2 {
          font-weight: lighter;
        }
        
        .surah-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>

      <div class="surah-info">
        <h2> Nama : ${this._surah1.nama}</h2>
        <p> Arti : ${this._surah1.arti}</p>
        <p> Asma : ${this._surah1.asma}</p>
        <p> Type : ${this._surah1.type}</p>
        <p> Ayat : ${this._surah1.ayat}</p>
        <p> Audio : ${this._surah1.audio}</p>
        <p> Keterangan : ${this._surah1.keterangan}</p>
        <p> Nomor : ${this._surah1.nomor}</p>
        <p> Rukuk : ${this._surah1.rukuk}</p>
        <p> Urut : ${this._surah1.urut}</p>
      </div>
    `;
  }
}
 
customElements.define('surah-item', SurahItem);