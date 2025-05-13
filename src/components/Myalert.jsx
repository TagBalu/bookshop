import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";

function Myalert() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Alert variant="dark">Benvenuti nella libreria Minimal</Alert>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default Myalert;
