module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Users = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING,
    password: STRING,
    updated_at: DATE,
    created_at: DATE,
    state: {
      type: INTEGER,
      defaultValue: 1,
    },
  });

  return Users;
};
