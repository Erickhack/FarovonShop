import { get } from "../../../../shared/axios";

enum APIPaths {
  GetAllProducts = "/v2/shop/products",
  GetAllFilters = "/products/get-filters",
}

const GetAllProducts = (search: string) => get(APIPaths.GetAllProducts);

const GetAllFilters = () => get(APIPaths.GetAllFilters);

export const ProductAPIs = {
  GetAllProducts,
  GetAllFilters,
};
