"use client"
import React, { useRef, useState } from 'react'
// import { Button } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Image,Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ProfileSide() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();



  const clickHandler = () => {
    imageRef.current.click();
  }

  const imageHandler = (e) => {
    let file = e.target.files[0];
    setImage(file)
  }

  return (
    <div className='w-[40%] flex flex-col gap-3'>
      <div className='w-full bg-[#090E2B] flex flex-col gap-3 px-4 rounded-xl pt-1 pb-3'>
        <h1>Product Image</h1>
        <div className='w-full h-52 bg-white rounded-md relative'>
          {image ? <img src={URL.createObjectURL(image)} className='w-full h-full object-cover'></img> : <img src="/addproduct/addImage.png" alt="Add Image" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-16 h-16' />}
        </div>
        <div className='flex gap-3'>
          <Button color="primary" onPress={clickHandler}>
            <input type='file' ref={imageRef} style={{ display: "none" }} onChange={imageHandler} />
            EDIT
          </Button>
          <Button color="danger" onPress={() => setImage(null)}>
            REMOVE
          </Button>
        </div>
      </div>
      <Ingregiants />
    </div>
  )
}

export default ProfileSide




// main Used function
const Ingregiants = () => {
  let [Ingre, setIngre] = useState([]); /* 2 */
  const [inputIngre, setInputIngre] = useState(''); /* 1 */
  const [IngreState, setIngreState] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (e) => {
    setInputIngre(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputIngre.trim() !== '') {
      setIngre([...Ingre, inputIngre]);
      setInputIngre('');
      onClose();
      setIngreState(true);
    }
  };

  // const removeProductHandler=(item)=>{
  //     let elementToRemove=item
  //     Ingre=Ingre.filter(item=>item!==elementToRemove);
  // }


  return (
    <div className='w-full p-3 min-h-52 bg-[#090E2B] flex-wrap rounded-md'>
      <div className='flex gap-2 w-full p-3 rounded-md bg-slate-600 flex-wrap'>
        {IngreState &&
          Ingre.map((item, index) => (
            <div className='p-1 min-w-10 flex justify-center items-center bg-[#2c95ff] rounded-xl gap-2' key={index}>
              {item}
              {/* <button><FontAwesomeIcon icon={faXmark} className=' text-white'/></button> */}
            </div>
          ))
        }
        <Tooltip content="Add or Remove Ingrediants">
          <Button onClick={onOpen} isIconOnly onKeyDown={(e) => { if (e.key === 'Enter') onOpen(); }}>
            <Image src='/addProduct/addProduct.png' alt='loading' width={28} />
          </Button>
        </Tooltip>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <form onSubmit={handleFormSubmit}>
              <ModalHeader className="flex flex-col gap-1">Add Ingredient</ModalHeader>
              <ModalBody className='p-3'>
                <input
                  type="text"
                  className='w-full p-3 text-black flex flex-wrap'
                  value={inputIngre}
                  onChange={handleInputChange}
                  placeholder="Enter ingredient"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={() => { setInputIngre(''); setIngreState(false); setIngre([]); onClose(); }}>
                  CLEAR
                </Button>
                <Button color="primary" type="submit" onKeyDown={(e) => { if (e.key === 'Enter') handleFormSubmit }}>
                  ADD
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

