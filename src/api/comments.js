import Vue from "vue"
import config from "../config";
import axios from "axios";

Vue.use(axios)

export default {
  name: "CommentService",

  getComments() {
    let url = config.COMMENTS_URL
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  addComments(comments) {
    let url = config.COMMENTS_URL
    return axios.create(url, comments)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}
