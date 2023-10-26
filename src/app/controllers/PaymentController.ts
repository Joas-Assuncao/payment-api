import { AxiosResponse } from "axios";
import { Request, Response } from "express";

import { IPaymentData } from "../models/paymentData";
import { apiService } from "../services/axios";

class PaymentController {
  async findAll(req: Request, res: Response) {
    try {
      const response: AxiosResponse<IPaymentData> = await apiService({
        method: "GET",
        url: "/payments",
      });

      res.status(200).json(response.data);
    } catch (err) {
      // 500 pois é um erro em outra api(servidor)
      res.status(500).json(err);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const response: AxiosResponse<IPaymentData> = await apiService({
        method: "POST",
        url: "/payments",
        data: req.body,
      });

      res.status(201).json(response.data);
    } catch (err: any) {
      console.log(err.response.data);
      // 500 pois é um erro em outra api(servidor)
      res.json(err);
    }
  }
}

export default new PaymentController();
