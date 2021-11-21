import axios from "axios";

const defaultParams = {
    currentPage: 1,
    searchQuery: "",
    method: "get",
    per_page: 12,
    baseURL: "https://pixabay.com/api/",
    params: "&image_type=photo",
    API_KEY: "23250998-48dbeb0708fc3f5b568666898",
  };

const fetchImages = async ({ currentPage, searchQuery }) => {
  const { API_KEY, params } = defaultParams;
  return await axios
    .get(
      `?key=${API_KEY}&q=${searchQuery}&${params}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`,
      defaultParams
    )
    .then((response) => response.data.hits);
};

export default { fetchImages };