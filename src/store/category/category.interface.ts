import { IPaginate } from "../../interface/paginate";
export interface ICategory {
  id: number;
  name: string;
  images: string;
  is_active: number;
  message: string;
}
export interface ICategoryClient {
  data: ICategory[];
}

export interface ICategoryPaginate {
  data: ICategory[];
  pagination: IPaginate;
}
