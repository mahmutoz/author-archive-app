import api from "src/api/client";

const PhotoService = {
  getPhotos(params) {
    return api.fakeApiClient.get("/photos", { params: { ...params } });
  }
};

export default PhotoService;
