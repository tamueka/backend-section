const BaseRepository = require("./base.repository");
let _user = null;

class UserRespository extends BaseRepository {
  constructor({ User }) {
    super(User);
    _user = User;
  }

  async getUserByUserName(username) {
    return await _user.findOne({ username });
  }
}

module.exports = UserRespository;
