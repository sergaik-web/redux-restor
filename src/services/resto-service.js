export default class RestoService {
  STATIC_URL = "http://localhost:3001";

  async getFetch(url) {
    try {
      const res = await fetch(`${this.STATIC_URL}${url}`);
      return await res.json();
    } catch (err) {
      throw new Error(err);
    }
  }

  async getMenuItems() {
    return await this.getFetch("/menu");
  }
}
