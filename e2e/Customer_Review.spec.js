/* eslint-disable no-undef */
const assert = require('assert');

Feature('Customer Review');

Scenario('Post new review', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__title');
  const firstRestaurant = locate('.restaurant__title').first();
  I.click(firstRestaurant);

  I.seeElement('.form-container.form__review');
  I.seeElement('[name="name"]');
  I.seeElement('[name="review"]');
  I.seeElement('#button__submit_review');

  const inputName = 'Gilang W. Asmara';
  const inputReview = 'E2E test';

  const numberReviewBefore = await I.grabNumberOfVisibleElements('.review-container');

  I.fillField('name', inputName);
  I.fillField('review', inputReview);
  I.click('#button__submit_review');

  I.waitNumberOfVisibleElements('.review-container', numberReviewBefore + 1);

  const lastReviewer = await I.grabTextFrom(locate('.review-container > div > b').last());
  const lastReview = await I.grabTextFrom(locate('.review__customer_review').last());

  assert.strictEqual(lastReviewer, inputName);
  assert.strictEqual(lastReview, inputReview);
});
