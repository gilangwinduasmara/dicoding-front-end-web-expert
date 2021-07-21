import Page from '.';
import RestaurantSource from '../../data/restaurant-source';
import CONFIG from '../../globals/config';
import { formToJSON } from '../../utils/form-helper';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { getPathVariable } from '../../utils/query-parser';
import ScrollHandler from '../../utils/scroll-handler';

class RestaurantDetail extends Page {
  async render() {
    this.showLoading();
    this._restaurant = await RestaurantSource.getDetail(getPathVariable());
    const colors = ['#d0f4f4', '#eed5ff', '#ffc0d7', '#fff9c1', '#cfebd2'];
    const categoryHTML = this._restaurant.categories.map((category, index) => (
      /*html*/ `<span class='pill' style='background-color: ${colors[index % colors.length]}'>${category.name}</span>`
    )).toString().replaceAll(',', '');
    const foodHTML = this._restaurant.menus.foods.map((food, index) => (
      /*html*/ `<div class='pill' style='background-color: ${colors[index % colors.length]}'>${food.name}</div>`
    )).toString().replaceAll(',', '');
    const drinkHTML = this._restaurant.menus.drinks.map((drink, index) => (
      /*html*/ `<div class='pill' style='background-color: ${colors[index % colors.length]}'>${drink.name}</div>`
    )).toString().replaceAll(',', '');
    const reviewsHTML = this._restaurant.customerReviews.map((customerReview) => (
      /*html*/ `
                <div class='review-container'>
                    <div>
                        <b>${customerReview.name}</b>
                    </div>
                    <div class='review__date'>
                        <div>${customerReview.date}</div>
                    </div>
                    <div class='review__customer_review'>
                        <div>${customerReview.review}</div>
                    </div>
                </div>
            `
    )).toString().replaceAll(',', '');
    return /*html*/`
            <div style='padding-top: 100px' class='restaurant__detail'>
                <div class='restaurant__detail_image'>
                    <img crossorigin="anonymous" src='${CONFIG.IMAGE_BASE_URL(this._restaurant.pictureId, 'large')}' alt=${this._name}>
                    <div class='button__add_to_favorite'>
                        <button class='button-primary' id='button__favorite'>Add to favorite</button>
                    </div>
                </div>
                <div class='restaurant__detail_wrapper'>
                    <div class='restaurant__detail_info'>
                        <div>
                            <div><span class='restaurant__title'>${this._restaurant.name}</span> &bull; ${this._restaurant.rating}</div>
                            <div class='restaurant__detail_categories'>${categoryHTML}</div>
                        </div>
                        <div class='restaurant__detail__location'>
                            <div class='restaurant__detail_city'>
                                ${this._restaurant.city}
                            </div>
                            <div class='restaurant__detail_address'>
                                ${this._restaurant.address}
                            </div>
                        </div>
                    </div>
                    <div class='restaurant__detail_description'>${this._restaurant.description}</div>
                    <div class='restaurant__detail_menus'>
                        <div>
                            <b>Foods</b>
                            <div class='restaurant__detail_menus_item'>
                                ${foodHTML}
                            </div>
                        </div>
                        <div>
                            <b>Drinks</b>
                            <div class='restaurant__detail_menus_item'>
                                ${drinkHTML}
                            </div>
                        </div>
                    </div>
                    <h2>Reviews</h2>
                    <div class='restaurant__detail_reviews'>
                        ${reviewsHTML}
                    </div>
                    <div>
                        <form class='form-container form__review'>                            
                            <input name='id' hidden value='${this._restaurant.id}'>
                            <label for='name'>Name</label>
                            <input class='form-control' name='name'>
                            <label for='review'>Review</label>
                            <textarea class='form-control' name='review'></textarea>
                            <button id='button__submit_review' type='button' class='button-primary'>Submit Review</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
  }

  async _onButtonReviewClick() {
    const button = document.getElementById('button__submit_review');
    button.disabled = true;
    const form = document.querySelector('form');
    const jsonReview = formToJSON(form);
    await RestaurantSource.postReview(jsonReview);
    await this.init();
    button.disabled = false;
  }

  async afterRender() {
    ScrollHandler.remove();
    const likeButtonContainer = document.getElementById('button__favorite');
    LikeButtonInitiator.init({
      container: likeButtonContainer, restaurant: this._restaurant,
    });
    const buttonReview = document.getElementById('button__submit_review');
    buttonReview.addEventListener('click', () => { this._onButtonReviewClick(); });
    this.hideLoading();
  }
}

export default RestaurantDetail;
