import { ProductAPIs } from ".";
import { AppDispatch } from "../../../../app/store";
import { ProductAction } from "../model";

const GetAllProducts = (search?: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(ProductAction.startPending("products"));
    const response = await ProductAPIs.GetAllProducts(search ?? "");
    dispatch(
      ProductAction.setData({
        key: "products",
        value: response.data["hydra:member"],
      })
    );
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(ProductAction.stopPending("products"));
  }
};

const AddProductsToOrder = (productId: number) => (dispatch: AppDispatch) => {
  try {
  } catch (error) {
    console.error(error);
  } finally {
  }
};

export const ProductService = { GetAllProducts };
