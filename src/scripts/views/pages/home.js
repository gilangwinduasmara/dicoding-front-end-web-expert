import Page from '.';
import RestaurantSource from '../../data/restaurant-source';

class Home extends Page {
  async render() {
    this.showLoading();
    return /*html*/`
        <div class='jumbotron'>
            <picture>
              <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
              <img src='./images/heros/hero-image_2-large.jpg' alt='background' class='jumbotron__img'>
            </picture>
            <div class='jumbotron__content'>
                <h2>Every restaurant in your city</h2>
                <br>at your fingertips
            </div>
        </div>
        <div id='restaurants'>
            <h2 class='section__title'>Restaurants</h2>
            <div id='restaurant'>
            </div>
        </div>
    `;
  }

  async afterRender() {
    const restaurantListElement = document.querySelector('#restaurant');
    const { restaurants } = await RestaurantSource.getList();
    restaurants.forEach((restaurant) => {
      const html = `
              <restaurant-item id='${restaurant.id}' name='${restaurant.name}' description='${restaurant.description}' pictureId='${restaurant.pictureId}' city='${restaurant.city}' rating='${restaurant.rating}'></restaurant-item>
          `;
      restaurantListElement.insertAdjacentHTML('beforeend', html);
    });
    this.hideLoading();
  }
}

export default Home;
