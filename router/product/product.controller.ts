import { Request, Response, NextFunction } from "express";
import Product from "../../models/product.model";

const getAvailableProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await Product.find({});
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAvailableProducts,
};
