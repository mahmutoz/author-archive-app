import api from "src/api/client";

const PostService = {
  getPosts() {
    return api.fakeApiClient.get("/posts");
  },

  getPost(params) {
    return api.fakeApiClient.get("/posts", { params: { ...params } });
  }
};

export default PostService;
