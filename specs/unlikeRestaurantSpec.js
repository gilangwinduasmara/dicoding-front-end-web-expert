/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<button id="button__favorite">add to favorite</button>';
};
const clickButton = (action) => {
  document.getElementById('button__favorite').click();
  setTimeout(() => {
    action();
  }, 1000);
};

describe('Unliking a Restaurant', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.delete(1);
  });

  it('Should show "remove from favorite button" button when the restaurant has been added to favorite before', async () => {
    await FavoriteRestaurantIdb.create({ id: 1 });
    await TestFactories.createLikeButtonPresenterWithRestaourant({ id: 1 });
    expect(Array.from(document.querySelectorAll('button')).find((el) => el.textContent === 'remove from favorite')).toBeTruthy();
  });

  it('Should not display "remove from favorite button" button when the restaurant has been added to favorite before', async () => {
    await FavoriteRestaurantIdb.create({ id: 1 });
    await TestFactories.createLikeButtonPresenterWithRestaourant({ id: 1 });
    clickButton(() => {
      expect(Array.from(document.querySelectorAll('button')).find((el) => el.textContent === 'add to favorite')).toBeFalsy();
    });
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaourant({ id: 1 });

    clickButton(async () => {
      expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
    });
  });
});
