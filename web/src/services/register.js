import { api } from "./index";

export default {
  async CreateUser(data) {
    return await api.post("/user", data);
  },
};
