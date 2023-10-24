class PaymentController {
  async index() {
    return ["payments"];
  }

  async store() {
    return ["payments"];
  }

  async update() {
    return ["payments"];
  }

  async delete() {
    return;
  }
}

module.exports = new PaymentController();
