const { getAllGps, getGpsByDeviceId } = require("./gps_controller");
const router = require("express").Router();

router.get("/", getAllGps);
router.get("/:device_id", getGpsByDeviceId);
module.exports = router;
