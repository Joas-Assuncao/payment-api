import { AxiosResponse } from "axios";
import { Request, Response } from "express";
import { ICustomer, ICustomerData } from "../models/customerData";
import { apiService } from "../services/axios";

class CustomerController {
  async findAll(req: Request, res: Response) {
    try {
      const response: AxiosResponse<ICustomerData> = await apiService({
        method: "GET",
        url: "/customers",
      });

      res.status(200).json(response.data);
    } catch (err) {
      console.log(err);
      // 500 pois é um erro em outra api(servidor)
      res.status(500).json(err);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const response: AxiosResponse<ICustomer> = await apiService({
        method: "POST",
        url: "/customers",
        data: req.body,
      });

      res.status(201).json(response.data);
    } catch (err: any) {
      console.log(err.response.data);
      // 500 pois é um erro em outra api(servidor)
      res.status(500).json(err);
    }
  }
}

export default new CustomerController();
