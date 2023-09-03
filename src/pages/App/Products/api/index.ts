import { get } from "../../../../shared/axios";

enum APIPaths {
  GetAllProducts = "/products/get-all",
  GetAllFilters = "/products/get-filters",
}

const GetAllProducts = (search: string) => get(APIPaths.GetAllProducts);

const GetAllFilters = () => get(APIPaths.GetAllFilters);

export const ProductAPIs = {
  GetAllProducts,
  GetAllFilters,
};
