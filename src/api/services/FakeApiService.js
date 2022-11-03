import api from "@src/api/client";

const FakeApiService = {
  getUsers() {
    return api.fakeApiClient.get("/users");
  },

  getUser(params) {
    return api.fakeApiClient.get("/users", { params: { ...params } });
  },

  getPosts() {
    return api.fakeApiClient.get("/posts");
  },

  getPost(params) {
    return api.fakeApiClient.get("/posts", { params: { ...params } });
  },

  getAlbums() {
    return api.fakeApiClient.get("/albums");
  },

  getPhotos() {
    return api.fakeApiClient.get("/photos");
  },
};

export default FakeApiService;
