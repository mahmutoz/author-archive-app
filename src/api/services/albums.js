import api from "src/api/client";

const AlbumService = {
  getAlbum(params) {
    return api.fakeApiClient.get("/albums", { params: { ...params } });
  }
};

export default AlbumService;
