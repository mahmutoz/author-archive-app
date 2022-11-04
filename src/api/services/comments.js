import api from "src/api/client";

const CommentService = {
  getComments() {
    return api.fakeApiClient.get("/comments");
  },

  getComment(params) {
    return api.fakeApiClient.get("/comments", { params: { ...params } });
  }
};

export default CommentService;
