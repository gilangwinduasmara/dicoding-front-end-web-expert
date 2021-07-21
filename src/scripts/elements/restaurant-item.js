import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this._id = this.getAttribute('id') || null;
    this._name = this.getAttribute('name') || null;
    this._description = this.getAttribute('description') || null;
    this._pictureId = this.getAttribute('pictureId') || null;
    this._city = this.getAttribute('city') || null;
    this._rating = this.getAttribute('rating') || null;

    this.innerHTML = /*html*/`
            <a href="/#/restaurant/${this._id}" class="restaurant__box">
                <div class="restaurant__image">
                    <img crossorigin="anonymous" class="lazyload" data-src="${CONFIG.IMAGE_BASE_URL(this._pictureId)}" alt=${this._name}>
                </div>
                <div class="restaurant__details">
                    <div class="restaurant__info">
                        <div><span class="restaurant__title">${this._name}</span> &bull; ${this._rating}</div>
                        <div>${this._city}</div>
                    </div>
                    <div class="restaurant__description">${this._description}</div>
                </div>
            </a>
        `;
  }

  disconnectedCallback() {

  }

  adoptedCallback() {

  }
}

export default RestaurantItem;
