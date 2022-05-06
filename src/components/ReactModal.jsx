import React  from "react";
import Modal from "react-modal";
import { Button } from "./Button";
import Modern_data from "./Data/Modern_data";

export const ReactModal = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Preview</Button>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Preview template</p>
          <button onClick={() => setOpen(false)}>close</button>
        </div>
        <p>Tracer</p>
        <video width="400" controls>
          <source
            src="https://storage.googleapis.com/lumen5-site-images/Prev_Tracer.mp4"
            type="video/mp4"
          />
        </video>
      </Modal>
    </>
  );
};
