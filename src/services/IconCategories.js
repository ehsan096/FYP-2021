import GenericService from "./GenericService";
class IconCategoriesService extends GenericService {
  constructor() {
    super();
  }
  addIconCategory = (data) => this.post("iconcategories", data);
  deleteIconCategory = (_id) => this.delete("iconcategories/" + _id);
  updateIconCategory = (_id, data) => this.put("iconcategories/" + _id, data);
  getIconCategories = () => this.get("iconcategories");
  // getSingleProduct = (id) => this.get("products/" + id);
}

let iconCategoriesService = new IconCategoriesService();
export default iconCategoriesService;
