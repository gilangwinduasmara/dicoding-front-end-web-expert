const getPathVariable = () => {
  const paths = window.location.href.split('/');
  const lastPath = paths[paths.length - 1];
  return lastPath;
};

module.exports = { getPathVariable };
