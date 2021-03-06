/* eslint-disable react/no-unused-state */
import "./App.css";
import React, { useState, useEffect } from "react";
import imagesApi from "./services/images-api";
import Container from "./components/Container/Container";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";


function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [largeImageURL, setLargeImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeQuery = (query) => {
    if (query.trim() === "") {
      alert("Please write something");
      return;
    }
    setSearchQuery(query);
    setCurrentPage(1);
    setImages([]);
  };

  const scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setError(error);
  }, [error]);
  useEffect(() => {
    if (searchQuery !== "") fetchImages();
  }, [searchQuery]);

  const fetchImages = () => {
    setIsLoading(true);

    const options = {
      searchQuery,
      currentPage,
    };

    imagesApi
      .fetchImages(options)
      .then((data) => {
        setImages([...images, ...data]);
        setCurrentPage((prevPage) => prevPage + 1);
        setError("");
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
        scrollTo();
      });
  };
  const toggleModal = () => setShowModal(!showModal);

  const handleLargeURLImage = (data) => {
    setLargeImageURL(data);
    setShowModal(true);
  };

  return (
    <div className="App">
      <Container>
        {showModal && (
          <Modal onClose={toggleModal} largeImageURL={largeImageURL} />
        )}
        <Searchbar onSubmit={onChangeQuery} />
        {images.length > 0 && (
          <ImageGallery
            images={images}
            handleLargeURLImage={handleLargeURLImage}
          />
        )}
        {isLoading ? (
          <Loader error={error} />
        ) : (
          images.length > 0 && <Button onClick={fetchImages} />
        )}
      </Container>
    </div>
  );
}
export default App;