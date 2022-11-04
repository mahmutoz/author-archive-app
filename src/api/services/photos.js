import api from "src/api/client";

const PhotoService = {
  getPhotos() {
    return api.fakeApiClient.get("/photos");
  }
};

export default PhotoService;
