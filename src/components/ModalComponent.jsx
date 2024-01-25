/* eslint-disable react/prop-types */
import { useGlobalContext } from '@/mycontext';
import { Button, Modal } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const ModalComponent = ({ show, setShow }) => {
  const { cart, amount, remove, total } = useGlobalContext();

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>cart</Modal.Title>
      </Modal.Header>
      {amount === 0 ? (
        <Modal.Body>
          your cart is empty
        </Modal.Body>
      ) : (
        <Modal.Body style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <img className='w-[90px] rounded-[5px] object-contain' src={cart.img} alt={cart.title} />
          <div className='flex flex-col flex-1 space-y-2'>
            <p style={{ color: 'hsl(219, 9%, 45%)' }}
              className='font-medium text-[18px] capitalize '>{cart.title} </p>
            <p style={{ color: 'hsl(219, 9%, 45%)' }} 
            className='font-medium text-[18px] capitalize'>
              ${cart.price}.00 x {amount} = <span>${total}.00 </span> </p>
          </div>
          <FaTrash onClick={remove} cursor='pointer' color='red' size={25} />
        </Modal.Body>
      )}

      {amount !== 0 && (
        <Modal.Footer>
          <Button style={{
            flex: 1, display: 'flex', alignItems: 'center',
            justifyContent: 'center', backgroundColor: 'hsl(26, 100%, 55%)',
            color: 'white', fontWeight: '700', textTransform: 'capitalize', border: "none"
          }} onClick={handleClose}>
            checkout
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default ModalComponent;
