import GenericService from "./GenericService";
class ShapesService extends GenericService {
  constructor() {
    super();
  }
  addShape = (data) => this.post("shapes", data);
  deleteShape = (_id) => this.delete("shapes/" + _id);
  updateShape = (_id, data) => this.put("shapes/" + _id, data);
  getShapes = () => this.get("shapes");
  // getSingleProduct = (id) => this.get("products/" + id);
}

let shapesService = new ShapesService();
export default shapesService;
