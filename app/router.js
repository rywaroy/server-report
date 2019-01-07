module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/error', controller.error.index);
};