module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  router.post('/errors', controller.errors.create);
  router.get('/errors', jwt, controller.errors.list);
  router.post('/fix/:id', jwt, controller.errors.fix);
  router.get('/location', jwt, controller.errors.location);
  router.post('/performance', controller.performance.create);
  router.get('/projects', jwt, controller.projects.list);
  router.post('/projects', jwt, controller.projects.create);
  router.post('/login', controller.users.login);
};
