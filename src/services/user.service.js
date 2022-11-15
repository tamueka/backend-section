const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  async getUserByUsername(username) {
    if (!username) {
      const error = new Error();
      error.status = 404;
      error.message = "username not found";
      throw error;
    }

    return await _userRepository.getUserByUserName(username);
  }
}

module.exports = UserService;
