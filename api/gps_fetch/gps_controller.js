const { getAllGps, getGpsByDeviceId } = require("./gps_service");

module.exports = {
  getAllGps: (req, res) => {
    getAllGps((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  getGpsByDeviceId: (req, res) => {
    const id = req.params.device_id;
    getGpsByDeviceId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
