import { AxiosResponse } from "axios";
import { Request, Response } from "express";
import { IFinanceBalance } from "../models/financeBalance";
import { apiService } from "../services/axios";

class FinanceController {
  async findBalance(req: Request, res: Response) {
    try {
      const response: AxiosResponse<IFinanceBalance> = await apiService({
        method: "GET",
        url: "/finance/balance",
      });

      res.status(200).json(response.data);
    } catch (err) {
      // 500 pois é um erro em outra api(servidor)
      res.status(500).json(err);
    }
  }
}

export default new FinanceController();
