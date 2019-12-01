class ProductsController {
  async store(req, res) {
    const { name, email, password } = req.body;

    this.user = {
      name,
      email,
      password
    };

    // enviar email

    return res.json(this.user);
  }
}

export default new ProductsController();
