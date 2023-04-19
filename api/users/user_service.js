const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into users(first_name,last_name,email,password) values(?,?,?,?)`,
      [data.first_name, data.last_name, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(
      `select user_id,first_name,last_name,email,password from users`,
      [],
      (error, results, fields) => {
        if (error) return callBack(error);
        return callBack(null, results);
      }
    );
  },
  getUsersById: (user_id, callBack) => {
    pool.query(
      `select user_id,first_name,last_name,email,password from users where user_id = ?`,
      [user_id],
      (error, results, fields) => {
        if (error) return callBack(error);
        return callBack(null, results[0]);
      }
    );
  },
  getUserByEmail: (email, callBack) => {
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) callBack(error);
        return callBack(null, results[0]);
      }
    );
  },
};
