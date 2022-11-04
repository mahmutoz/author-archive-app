import api from "src/api/client";

const UserService = {
  getUsers() {
    return api.fakeApiClient.get("/users");
  },

  getUser(params) {
    return api.fakeApiClient.get("/users", { params: { ...params } });
  }
};

export default UserService;
