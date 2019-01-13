module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/errors', controller.errors.create);
  router.get('/errors', controller.errors.list);
  router.get('/fix/:id', controller.errors.fix);
};