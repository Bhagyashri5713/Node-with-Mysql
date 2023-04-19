const pool = require("../../config/database");

module.exports = {
  getAllGps: (callBack) => {
    pool.query(
      `select id,device_id,device_type,timestamp,location from gps`,
      [],
      (error, results, fields) => {
        if (error) return callBack(error);
        return callBack(null, results);
      }
    );
  },

  getGpsByDeviceId: (device_id, callBack) => {
    pool.query(
      `select id,device_id,device_type,timestamp,location from gps where device_id = ?`,
      [device_id],
      (error, results, fields) => {
        if (error) return callBack(error);
        return callBack(null, results[0]);
      }
    );
  },
};
