module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/errors', controller.errors.create);
  router.get('/errors', controller.errors.list);
  router.post('/fix/:id', controller.errors.fix);
  router.get('/location', controller.errors.location);
  router.post('/performance', controller.performance.create);
  router.get('/projects', controller.projects.list);
  router.post('/projects', controller.projects.create);
};
