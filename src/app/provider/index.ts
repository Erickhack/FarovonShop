import compose from "compose-function";
import { WithNavigate } from "./with-navigate";
import { WithStore } from "./with-store";

export const WithProvider = compose(WithNavigate, WithStore);
