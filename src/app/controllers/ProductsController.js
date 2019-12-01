class ProductsController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password
    };

    // enviar email

    return res.json(user);
  }
}

export default new ProductsController();
