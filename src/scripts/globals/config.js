const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  IMAGE_BASE_URL: (pictureId, resolution = 'small') => `${CONFIG.BASE_URL}images/${resolution}/${pictureId}`,
  CACHE_NAME: 'Gores-V3',
  DATABASE_NAME: 'movie-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',
};

export default CONFIG;
