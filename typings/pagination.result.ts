import Product from "../models/product.model";

export interface PaginationResult {
    products: typeof Product[];
    next?: {
      page: number;
      limit: number;
    };
    previous?: {
      page: number;
      limit: number;
    };
  }