"use client"
// import React, { useState } from 'react'
import { Textarea, Switch } from "@nextui-org/react";
import React, { useCallback, useRef, useState } from 'react';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Tooltip, Image } from "@nextui-org/react";
import { addItem } from "@/app/Servies/productServic";
import { toast } from "react-toastify";
// import { position } from "html2canvas/dist/types/css/property-descriptors/position";
// import ProductInfo from './ProductInfo';

function ProfileSide() {
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    productNumber: "",
    productImgURL: "",
    description: "",
    discount: "",
    category: "",
    quantity: "",
    // Stock: "",
    ingredients: [],
    collections: "",
    currancy: "",
    userID: "661091b535781e7bbe19906b"
  });

  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const clickHandler = () => {
    imageRef.current.click();
  }

  const imageHandler = (e) => {
    let file = e.target.files[0];
    setImage(file);
    setProductInfo({ ...productInfo, productImgURL: URL.createObjectURL(file) });
  }

  return (
    <div className="flex gap-2">
      <div className='w-[40%] flex flex-col gap-3'>
        <div className='w-full bg-[#090E2B] flex flex-col gap-3 px-4 rounded-xl pt-1 pb-3'>
          <h1>Product Image</h1>
          <div className='w-full h-52 bg-white rounded-md relative'>
            {image ? <img src={URL.createObjectURL(image)} className='w-full h-full object-cover'></img> : <img src="./addproduct/addImage.png" alt="Add Image" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-16 h-16' />}
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
        <Ingregiants productInfo={productInfo} setProductInfo={setProductInfo} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        {JSON.stringify(productInfo)}
      </div>
      <DetailSide productInfo={productInfo} setProductInfo={setProductInfo} />
    </div>
  )
}

const Ingregiants = ({ productInfo, setProductInfo, isOpen, onClose, onOpen }) => {
  const [inputIngre, setInputIngre] = useState('');
  const [IngreState, setIngreState] = useState(false);

  const handleInputChange = (e) => {
    setInputIngre(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputIngre.trim() !== '') {
      setProductInfo(() => ({
        ...productInfo,
        ingredients: [...productInfo.ingredients, inputIngre]
      }));
      setInputIngre('');
      onClose();
      setIngreState(true);
    }
  };

  return (
    <div className='w-full p-3 min-h-52 bg-[#090E2B] flex-wrap rounded-md'>
      <div className='flex gap-2 w-full p-3 rounded-md bg-slate-600 flex-wrap'>
        {IngreState &&
          productInfo.ingredients.map((item, index) => (
            <div className='p-1 min-w-10 flex justify-center items-center bg-[#2c95ff] rounded-xl gap-2' key={index}>
              {item}
            </div>
          ))
        }
        <Tooltip content="Add or Remove Ingredients">
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
                <Button color="danger" variant="light" onClick={() => { setInputIngre(''); setIngreState(false); onClose(); setProductInfo(() => ({ ...productInfo, ingredients: [] })) }}>
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

export default ProfileSide;









function DetailSide({ productInfo, setProductInfo }) {
  return (
    <div className='w-[60%] flex flex-col gap-2'>
      <ProductInformation productInfo={productInfo} setProductInfo={setProductInfo} />
      <OverAllPricing productInfo={productInfo} setProductInfo={setProductInfo} />
    </div>

  )
}

export { DetailSide }



const ProductInformation = ({ productInfo, setProductInfo }) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className='w-full bg-[#090E2B] rounded-xl flex flex-col p-4 gap-6'>
      <div className='w-full font-semibold text-lg'>Product Information</div>
      <div className='flex flex-col gap-2'>
        <form className='flex gap-3'>
          <div className='flex flex-col w-full gap-2'>
            <div>Product Name</div>
            <div className='p-2 border-[1px] bg-[#202854] border-white rounded-xl'>
              <input type="text"
                name="product_name"
                id="product_name" placeholder='eg. Hookah'
                onChange={(e) => setProductInfo({ ...productInfo, name: e.target.value, })}
                value={productInfo.name}
                className='w-full border-none outline-none bg-[#202854]' /></div>
          </div>
          <div className='flex flex-col w-full gap-2'>
            <div>Category</div>
            <select
              name="product_Catogory"
              id="product_Catogory"
              onChange={(e) => setProductInfo({ ...productInfo, category: e.target.value, })}
              value={productInfo.category}
              className=' p-2 border-[1px] bg-[#202854] border-white rounded-xl'>
              <option className='p-2 border-[1px] bg-[#202854] border-white rounded-xl' value="">Select an option</option>
              <option className='p-2 border-[1px] bg-[#202854] border-white rounded-xl' value="Fruit">Fruit</option>
              <option className='p-2 border-[1px] bg-[#202854] border-white rounded-xl' value="Drink">Drink</option>
              <option className='p-2 border-[1px] bg-[#202854] border-white rounded-xl' value="FastFood">Fast Food</option>
              <option className='p-2 border-[1px] bg-[#202854] border-white rounded-xl' value="Juice">Juice</option>
            </select>
          </div>
        </form>
        <form className='flex gap-2'>
          <div className='flex flex-col w-1/2 gap-2'>Description
            <TextArea productInfo={productInfo} setProductInfo={setProductInfo} />
            <div className='flex flex-col gap-2'>
              Collection
              <div className='w-full h-8 border-[1px] border-white rounded-lg bg-[#202854] p-2 flex'>
                <input type='text' placeholder='e.g DayCard' className='border-none outline-none h-full w-full bg-[#202854] text-xs'
                  id="product_collection"
                  onChange={(e) => setProductInfo({ ...productInfo, collection: e.target.value })}
                  value={productInfo.collection}
                /></div>
            </div>
          </div>
          <div className='w-1/2 flex flex-col gap-2'>
            <div>Atrikelnummer</div>
            <div className='w-[70%] p-1 pl-3 rounded-xl border-[1px] bg-[#202854] '>
              <input type="text" className='border-none outline-none w-full bg-[#202854]' placeholder='eg. 74219241941'
                name="produt_number"
                id="produt_number"
                onChange={(e) => setProductInfo({ ...productInfo, productNumber: e.target.value })}
                value={productInfo.productNumber}
              />
            </div>
            {/* here i have to add the togel button and date and time seter  */}
            <SwitchArea productInfo={productInfo} setProductInfo={setProductInfo} />
            <div className='flex flex-col gap-2'>Quantity
              <div className='w-full h-8 border-[1px] border-white rounded-lg bg-[#202854] p-2 flex'>
                <input type='number' placeholder='e.g 2' className='border-none outline-none h-full w-full bg-[#202854] text-xs'
                  id="Product_quantity"
                  onChange={(e) => setProductInfo({ ...productInfo, quantity: e.target.value })}
                  value={productInfo.quantity}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const TextArea = ({ productInfo, setProductInfo }) => {
  return (
    <Textarea
      placeholder="Enter your description"
      className="max-w-xs"
      color='secondary'
      minRows={5}

      name="product_discription"
      id="product_discription"
      onChange={(e) => setProductInfo({ ...productInfo, description: e.target.value })}
      value={productInfo.description}
    />
  )
}


const SwitchArea = ({ productInfo, setProductInfo }) => {
  const [Button1, setButton1] = useState(false);
  const [Button2, setButton2] = useState(false);
  return (
    <div className='grid grid-cols-2 gap-2'>
      <div className='flex items-center text-sm text-gray-400 gap-1'><Switch aria-label="Automatic updates" size='sm' className='w-10' />Nicht Verfügbar</div>
      <div className='w-[90%] h-8 border-[1px] border-white rounded-lg bg-[#202854]'>
        {/* <BasicDateTimePicker/> */}
      </div>
      <div className='flex items-center text-sm text-gray-400 gap-1'><Switch aria-label="Automatic updates" size='sm' onClick={() => { !Button2 ? setButton2(true) : setButton2(false) }} />Rabatt in %</div>
      <div className='w-[90%] h-8 border-[1px] border-white rounded-lg bg-[#202854] p-2 flex'>
        <input type='text' placeholder='Enter the disscount' className='border-none outline-none h-full w-full bg-[#202854] text-xs'
          id="product_disscount"
          onChange={(e) => { Button2 ? setProductInfo({ ...productInfo, discount: e.target.value }) : setProductInfo({ ...productInfo, discount: "0%" }) }}
          value={productInfo.discount}
        />
      </div>
    </div>
  )
}



// dividing it into the two parts

const OverAllPricing = ({ productInfo, setProductInfo }) => {
  return (
    <div className='w-full flex gap-2'>
      <Pricing productInfo={productInfo} setProductInfo={setProductInfo} />
      <Setting productInfo={productInfo} setProductInfo={setProductInfo} />
    </div>
  );
}

const Pricing = ({ productInfo, setProductInfo }) => {
  const ProductAdded=useCallback( async () => {
    // try {
    //   const result = await addItem(productInfo);
    //   console.log(result)
    //   toast.success("Item is Added !!", {position:"top-center"})
    // }
    // catch (error) {
    //   console.log(error)
    //   toast.error("Item Not Added !!", {position:"top-left" })
    // }
    console.log("heeeelo")
  },[productInfo]);
  return (
    <div className='w-[70%] bg-[#090E2B] rounded-xl flex flex-col p-5 gap-4'>
      <div className='flex gap-2 w-full '>
        <form className='flex flex-col w-full gap-1 text-sm' >
          <div className='text-lg font-bold flex justify-between'>
            <div>Pricing</div>
            <Button color="primary" onClick={ProductAdded}>ADD ITEM</Button>
          </div>
          <div className="flex w-full gap-3">
            <div className='w-1/2 rounded-xl flex flex-col p-2 bg-[#202854] border-[1px] border-white'>
              Price
              <input type='text' placeholder='e.g 99.9$' className='border-none outline-none h-full w-full bg-[#202854] text-xs'
                id="product_Price"
                onChange={(e) => setProductInfo({ ...productInfo, price: e.target.value })}
                value={productInfo.price}
              /></div>
            <div className='flex flex-col w-1/2 gap-1 text-sm'>
              <div className='w-full rounded-xl flex flex-col p-2 bg-[#202854] border-[1px] border-white'>
                  currancy
                <input type='text' placeholder='CHF' className='border-none outline-none h-full w-full bg-[#202854] text-xs'
                  id="product_currancy"
                  onChange={(e) => setProductInfo({ ...productInfo, currancy: e.target.value })}
                  value={productInfo.currancy}
                /></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


const Setting = ({ productInfo, setProductInfo }) => {
  return (
    <div className='w-[30%] bg-[#090E2B] rounded-xl flex flex-col text-xs p-2 text-[gray] gap-1'>
      <div>Settings</div>
      <div className='flex w-full items-center'><Switch defaultSelected size="sm"></Switch>Monthly product update</div>
      <div className='flex w-full items-center'><Switch defaultSelected size="sm"></Switch>Optinal Auswahl Pakete</div>
      <div className='flex w-full items-center'><Switch defaultSelected size="sm"></Switch>Altersnachfrage 18</div>
    </div>
  );
}
