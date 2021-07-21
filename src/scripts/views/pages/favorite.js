import Page from '.';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

class Favorite extends Page {
  async render() {
    return /*html*/`
            <div id='restaurants' class='favorite'>
                <h2 class='section__title'>Favorites</h2>
                <div id='restaurant'>
                </div>
            </div>
        `;
  }

  async afterRender() {
    const restaurantListElement = document.querySelector('#restaurant');
    const restaurants = await FavoriteRestaurantIdb.getAll();
    if (restaurants.length === 0) {
      this._renderEmptyState();
    }
    restaurants.forEach((restaurant) => {
      const html = `
                <restaurant-item id='${restaurant.id}' name='${restaurant.name}' description='${restaurant.description}' pictureId='${restaurant.pictureId}' city='${restaurant.city}' rating='${restaurant.rating}'></restaurant-item>
            `;
      restaurantListElement.insertAdjacentHTML('beforeend', html);
    });
  }

  async _renderEmptyState() {
    const restaurantListElement = document.querySelector('#restaurant');
    const emptyStateHtml = /*html*/`
            <div class='text-center' style='margin-top: 128px'>
                <div class='empty-state-title'>
                    No results found
                </div>
                <div class='empty-state-description'>
                    Tap <b>Add to favorite</b> button to add your first favourite restaurant
                </div>
            </div>
        `;
    restaurantListElement.insertAdjacentHTML('afterend', emptyStateHtml);
  }
}

export default Favorite;
