import api from "src/api/client";

const PeopleImageService = {
  getPeopleImage(params) {
    return api.fakeFaceApiClient.get("", { params: { ...params } });
  }
};

export default PeopleImageService;
