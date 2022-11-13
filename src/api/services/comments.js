import api from "src/api/client";

const CommentService = {
  getComment(params) {
    return api.fakeApiClient.get("/comments", { params: { ...params } });
  }
};

export default CommentService;
