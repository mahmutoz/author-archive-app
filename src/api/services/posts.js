import api from "src/api/client";

const PostService = {
  getPosts() {
    return api.fakeApiClient.get("/posts");
  },

  getPost(params) {
    return api.fakeApiClient.get("/posts", { params: { ...params } });
  },

  getPostDetail(params) {
    return api.fakeApiClient.get(`/posts/${params.postId}`);
  }
};

export default PostService;
