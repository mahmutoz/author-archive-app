import api from "src/api/client";

const AuthorService = {
  getAuthors() {
    return api.fakeApiClient.get("/users");
  }
};

export default AuthorService;
