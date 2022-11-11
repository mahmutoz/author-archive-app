import api from "src/api/client";

const AlbumService = {
  getAlbums() {
    return api.fakeApiClient.get("/albums");
  },

  getAlbum(params) {
    return api.fakeApiClient.get("/albums", { params: { ...params } });
  }
};

export default AlbumService;
