/* eslint-disable no-undef */

const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty state favorite restaurant', ({ I }) => {
  I.seeElement('#restaurant');
  I.see('No results found', '.empty-state-title');
});

Scenario('Add a restaurant to favorite', async ({ I }) => {
  I.see('No results found', '.empty-state-title');
  I.amOnPage('/');
  I.seeElement('.restaurant__title');
  const firstRestaurant = locate('.restaurant__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#button__favorite');
  I.see('add to favorite', '#button__favorite');
  I.click('#button__favorite');
  I.see('remove from favorite', '#button__favorite');

  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__title');

  const firstFavoriteRestaurant = locate('.restaurant__title').first();
  const firstFavoriteRestaurantTitle = await I.grabTextFrom(firstFavoriteRestaurant);

  assert.strictEqual(firstRestaurantTitle, firstFavoriteRestaurantTitle);
});

Scenario('Remove a restaurant from favorite', async ({ I }) => {
  I.see('No results found', '.empty-state-title');
  I.amOnPage('/');
  I.seeElement('.restaurant__title');
  const firstRestaurant = locate('.restaurant__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#button__favorite');
  I.see('add to favorite', '#button__favorite');
  I.click('#button__favorite');
  I.see('remove from favorite', '#button__favorite');

  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__title');

  const firstFavoriteRestaurant = locate('.restaurant__title').first();
  const firstFavoriteRestaurantTitle = await I.grabTextFrom(firstFavoriteRestaurant);

  assert.strictEqual(firstRestaurantTitle, firstFavoriteRestaurantTitle);

  I.click(firstFavoriteRestaurant);
  I.seeElement('#button__favorite');
  I.see('remove from favorite', '#button__favorite');
  I.click('#button__favorite');
  I.see('add to favorite', '#button__favorite');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant');
  I.see('No results found', '.empty-state-title');
});
