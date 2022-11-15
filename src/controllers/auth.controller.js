let _authService = null;

class AuthController {
  constructor({ AuthService }) {
    _authService = AuthService;
  }

  async signUp(req, res) {
    const { body } = req;
    const createUser = await _authService.signUp(body);
    return res.status(201).send(createUser);
  }

  async signIn(req, res) {
    const { body } = req;
    const credenciales = await _authService.signIn(body);
    return res.send(credenciales);
  }
}

module.exports = AuthController;
