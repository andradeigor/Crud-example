import { api } from "./index";

export default {
  async LoginUser(data) {
    return await api.post("/auth", data);
  },
};
