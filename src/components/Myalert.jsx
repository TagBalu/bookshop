import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="dark">
        <div className="d-flex justify-content-between align-items-center">
          <p>Benvenuti nella mia povera libreria . Qui troverete i miei libri preferiti.</p>
          <Button onClick={() => setShow(false)} variant="outline-danger">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default AlertDismissible;
