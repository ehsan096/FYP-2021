import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";

class UserService extends GenericService {
  constructor() {
    super();
  }
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });
  register = (name, email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/register", { password, email, name })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });

  logout = () => {
    localStorage.removeItem("token");
  };
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role === "admin") return true;
      else return false;
    } else return false;
  };
  updateUserLogo = (_id, data) => this.put("users/save/" + _id, data);
  deleteUserLogo = (_id, data) => this.put("users/deleteLogo/" + _id, data);
  updateUserLogoExisting = (_id, data) =>
    this.put("users/save/" + _id + "/update", data);
  updateUser = (_id, data) => this.put("users/" + _id, data);
  deleteUser = (_id) => this.delete("users/" + _id);
  getUsers = () => this.get("users");
  getSingleUser = (_id) => this.get("users/" + _id);
}

let userService = new UserService();
export default userService;
