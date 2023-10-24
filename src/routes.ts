import { Router } from "express";
const paymentController = require("./app/controllers/PaymentController");

const router = Router();

router.get("/", paymentController.index);

module.exports = router;
