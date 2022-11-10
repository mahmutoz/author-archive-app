import api from "src/api/client";

const AuthorService = {
  getAuthors() {
    return api.fakeApiClient.get("/users");
  },

  getAuthor(params) {
    return api.fakeApiClient.get("/users", { params: { ...params } });
  }
};

export default AuthorService;
