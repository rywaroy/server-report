module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Projects = app.model.define('projects', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    updated_at: DATE,
    state: {
      type: INTEGER,
      defaultValue: 1,
    },
  });

  return Projects;
};
