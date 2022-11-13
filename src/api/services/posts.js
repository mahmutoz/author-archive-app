import api from "src/api/client";

const PostService = {
  getPost(params) {
    return api.fakeApiClient.get("/posts", { params: { ...params } });
  },

  getPostDetail(params) {
    return api.fakeApiClient.get(`/posts/${params.postId}`);
  }
};

export default PostService;
