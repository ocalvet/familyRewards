/**
 * FamilyController
 *
 * @description :: Server-side logic for managing families
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `FamilyController.getFamily()
   */
  getFamily: function (req, res) {
    // get the user id of the person that is logged in
    User.find({ parent: req.user.id })
      .then(function(users) {
        return res.json(users);
      });
  },

  addFamilyMember: function (req, res) {
    // Get current logged in user
    var user = req.user;
    console.log("response", res.param);

    return res.json([])
  }
};

