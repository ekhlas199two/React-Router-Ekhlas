import { useState } from "react";
import { Modal, Button } from "react-bootstrap";


function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPoster] = useState("");
  const [rating, setRating] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    handleClose();
    addMovie(title, description, posterURL, rating);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>ADD A MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <span>Description:</span>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <span>Poster:</span>
          <input
            type="text"
            value={posterURL}
            onChange={(e) => setPoster(e.target.value)}
          />
          <br />
          <span>Rating:</span>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddMovieForm;