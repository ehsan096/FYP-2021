import GenericService from "./GenericService";
class CategoriesService extends GenericService {
  constructor() {
    super();
  }
  addCategory = (data) => this.post("categories", data);
  deleteCategory = (_id) => this.delete("categories/" + _id);
  updateCategory = (_id, data) => this.put("categories/" + _id, data);
  getCategories = () => this.get("categories");
  // getSingleProduct = (id) => this.get("products/" + id);
}

let categoryService = new CategoriesService();
export default categoryService;
