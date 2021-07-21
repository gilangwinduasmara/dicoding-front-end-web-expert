/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<button id="button__favorite">add to favorite</button>';
};

const clickButton = (action) => {
  document.getElementById('button__favorite').click();
  setTimeout(() => {
    action();
  }, 1000);
};

describe('Liking A Restaurant', () => {
  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.delete(1);
  });

  it('Should not display "add to favorite button" button when the restaurant has been added to favorite before', async () => {
    await FavoriteRestaurantIdb.create({ id: 1 });
    expect(Array.from(document.querySelectorAll('button')).find((el) => el.textContent === 'add to favorite')).toBeTruthy();
  });

  it('Should not display "add to favorite button" button when the restaurant has been added to favorite before', async () => {
    await FavoriteRestaurantIdb.create({ id: 1 });
    expect(Array.from(document.querySelectorAll('button')).find((el) => el.textContent === 'remove from favorite')).toBeFalsy();
  });

  it('Should be able to add the restaurant to favorite', async () => {
    await FavoriteRestaurantIdb.create({ id: 1 });
    clickButton(async () => {
      const restaurant = await FavoriteRestaurantIdb.get(1);
      expect(restaurant).toEqual({ id: 1 });
    });
  });

  it('should not add a restaurant again when its already added to favorite', async () => {
    await FavoriteRestaurantIdb.create({ id: 1 });
    clickButton(async () => {
      const restaurants = await FavoriteRestaurantIdb.getAll();
      expect(restaurants).toEqual([{ id: 1 }]);
    });
  });

  xit('should not add a restaurant when it has no id', async () => {
    await FavoriteRestaurantIdb.create({});
    clickButton(async () => {
      expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
    });
  });
});
