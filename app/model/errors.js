module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Errors = app.model.define('errors', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    project: STRING,
    msg: STRING,
    url: STRING,
    line: INTEGER,
    col: INTEGER,
    created_at: DATE,
    updated_at: DATE,
    browser: STRING,
    version: STRING,
    state: {
      type: INTEGER,
      defaultValue: 1,
    },
  });

  return Errors;
};
