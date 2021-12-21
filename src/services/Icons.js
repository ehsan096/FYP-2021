import GenericService from "./GenericService";
class IconsService extends GenericService {
  constructor() {
    super();
  }
  addIcon = (data) => this.post("icons", data);
  deleteIcon = (_id) => this.delete("icons/" + _id);
  updateIcon = (_id, data) => this.put("icons/" + _id, data);
  getIcons = () => this.get("icons");
  // getSingleProduct = (id) => this.get("products/" + id);
}

let iconsService = new IconsService();
export default iconsService;
