import GenericService from "./GenericService";
class LogosService extends GenericService {
  constructor() {
    super();
  }
  addLogo = (data) => this.post("logos", data);
  deleteLogo = (_id) => this.delete("logos/" + _id);
  updateLogo = (_id, data) => this.put("logos/" + _id, data);
  getLogos = () => this.get("logos");
  // getSingleProduct = (id) => this.get("products/" + id);
}

let logoService = new LogosService();
export default logoService;
