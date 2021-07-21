import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';
import RestaurantDetail from '../views/pages/restaurant-detail';

const routes = {
  '/': Home,
  '/restaurant/:id': RestaurantDetail,
  '/favorite': Favorite,
};

export default routes;
