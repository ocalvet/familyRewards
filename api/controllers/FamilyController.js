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
    var users = User.find()
      .then(function(users) {
        return res.json(users);
      });
  }
};

