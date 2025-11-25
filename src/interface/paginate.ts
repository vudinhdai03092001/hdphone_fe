export interface IPaginate {
  next: number | null;
  pages: IPages[];
  prev: number | null;
  totalPages: number | null;
  pageSize: number;
  totalRecords: number;
}

interface IPages {
  number: number;
  active: boolean;
  isDots: boolean;
}
