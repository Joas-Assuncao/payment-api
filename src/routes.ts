import { Router } from "express";

import CustomerController from "./app/controllers/CustomerController";
import FinanceController from "./app/controllers/FinanceController";
import PaymentController from "./app/controllers/PaymentController";

const router = Router();

router.get("/customers", CustomerController.findAll);
router.get("/customers/:id", CustomerController.findById);
router.post("/customers", CustomerController.create);

router.get("/finance/balance", FinanceController.findBalance);

router.get("/payments", PaymentController.findAll);
router.post("/payments", PaymentController.create);

export default router;
