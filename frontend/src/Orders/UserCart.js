//Cart element for each user
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';











function UserCart() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <div className='CartName'>
            Ethan Outangoun ^
        </div>
      </Button>
      <Collapse in={open}>
        <div className = "CartTable">
          Put table here
        </div>
      </Collapse>
    </>
  );
}

export default UserCart;