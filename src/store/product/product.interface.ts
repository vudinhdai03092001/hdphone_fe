import { IPaginate } from "../../interface/paginate";
import { ICategory } from "../category/category.interface";
export interface IProduct {
  id: number;
  category_id: number;
  category: ICategory;
  price: number;
  old_price: number;
  quantity: number;
  description: string;
  name: string;
  name_category: string;
  active: number;
  message: string;
  images: IProductImage[];
}

export interface IProductPaginate {
  data: IProduct[];
  pagination: IPaginate;
}
export interface IProductImage {
  id: number;
  upload: string;
}
