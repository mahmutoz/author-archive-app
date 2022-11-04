import api from "src/api/client";

const AlbumService = {
  getAlbums() {
    return api.fakeApiClient.get("/albums");
  }
};

export default AlbumService;
