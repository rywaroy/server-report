module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Performance = app.model.define('performance', {
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
    ua: STRING,
    state: {
      type: INTEGER,
      defaultValue: 1,
    },
  });

  return Performance;
};
