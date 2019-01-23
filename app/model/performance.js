module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Performance = app.model.define('performances', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    project: STRING,
    lookupDomainTime: INTEGER,
    connectTime: INTEGER,
    requestTime: INTEGER,
    domReadyTime: INTEGER,
    readyStart: INTEGER,
    scriptLoadTime: INTEGER,
    pageFullLoadTime: INTEGER,
    created_at: DATE,
    updated_at: DATE,
    browser: STRING,
    version: STRING,
    state: {
      type: INTEGER,
      defaultValue: 1,
    },
  });

  return Performance;
};
