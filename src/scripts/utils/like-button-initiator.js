import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const LikeButtonInitiator = {
  async init({ container, restaurant }) {
    this._container = container;
    this._restaurant = restaurant;
    await this.render();
    this._container.addEventListener('click', () => this._onClick());
  },

  async render() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._container.innerHTML = 'remove from favorite';
    } else {
      this._container.innerHTML = 'add to favorite';
    }
  },

  async _onClick() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._container.innerHTML = 'add to favorite';
      await FavoriteRestaurantIdb.delete(id);
    } else {
      this._container.innerHTML = 'remove from favorite';
      await FavoriteRestaurantIdb.create(this._restaurant);
    }
    await this.render();
    return true;
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.get(id);
    return !!restaurant;
  },

};

export default LikeButtonInitiator;
