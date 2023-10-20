const db = require("../config/dbConfig");
const asyncHandler = require("express-async-handler");

// Display list of all staffs.
exports.staff_listing = asyncHandler(async (req, res, next) => {

  const staff_list = await db
    .query("SELECT first_name, last_name, staff_id, staff_role FROM staff")
    .then((response) => {
      console.log(response);
      res.render("staff", {
        title: "Staff List",
        staff_list: response,
      });
    })
    .catch((error) => {
      console.log(error);

      res.render("error", {
        title: "Error Page",
        error: error,
      });
    });
});
