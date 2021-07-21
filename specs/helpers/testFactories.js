import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaourant = async (restaurant) => {
  await LikeButtonInitiator.init({
    container: document.querySelector('#button__favorite'),
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaourant };
