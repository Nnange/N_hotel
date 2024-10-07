/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getRoomById, updateRoom } from "../utils/ApiFunctions";
import { Link, useParams } from "react-router-dom";

const EditRoom = () => {
  const [room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { roomId } = useParams();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setRoom({ ...room, photo: selectedImage });
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const roomData = await getRoomById(roomId);
        setRoom(roomData);
        setImagePreview(roomData.photo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRooms();
  }, [roomId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await updateRoom(roomId, room);
      if (response.status === 200) {
        setSuccesMessage("Room Updated successfully!");
        const updatedRoomData = await getRoomById(roomId);
        setRoom(updatedRoomData);
        setImagePreview(updatedRoomData.photo);
        setErrorMessage("");
      } else {
        setErrorMessage("Error updating room");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <section className="container mt-5 mb-5">
        <h3 className="text-center mt-5 mb-5">Edit Room</h3>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            {succesMessage && (
              <div className="alert alert-success fade show">
                {succesMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger fade show">{errorMessage}</div>
            )}

            <form onSubmit={handleSubmit} action="">
              <div className="mb-3">
                <label htmlFor="roomType" className="form-label">
                  Room Type
                </label>
                <input
                  className="form-control"
                  type="text"
                  required
                  id="roomType"
                  name="roomType"
                  value={room.roomType}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="roomPrice" className="form-label">
                  Room Price
                </label>
                <input
                  className="form-control"
                  type="number"
                  required
                  id="roomPrice"
                  name="roomPrice"
                  value={room.roomPrice}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="photo" className="form-label">
                  Room Photo
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <img
                    src={`data:image/jpeg;base64,${imagePreview}`}
                    alt="Room Preview"
                    style={{ maxWidth: "400px", maxHeight: "400" }}
                    className="mt-3"
                  />
                )}
              </div>

              <div className="d-grid gap-2 d-md-flex mt-2">
                <Link
                  to={"/existing-rooms"}
                  className="btn btn-outline-info ml-5"
                >
                  back
                </Link>
                <button className="btn btn-outline-warning">
                  Edit Room
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditRoom;
