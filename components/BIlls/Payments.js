"use client";
import { faFile } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const Payments = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className='h-screen flex flex-col bg-sideBarcol rounded-xl z-0'>
      <div className='text-white text-2xl font-bold p-4'>Rechnungen</div>
      <div className='flex flex-col gap-1'>
        <div className='flex w-full justify-end items-center gap-28 pr-32 text-white font-semibold text-sm'>
          <div>Zahlungsmittel</div>
          <div>STATUS</div>
          <div>EMPLOYED</div>
        </div>
        {data.map((value, index) => (
          <div key={index} className='w-full h-auto flex p-4 border-b justify-between gap-6 text-white items-center'>
            {/* Placeholder for customer picture */}
            <div className='flex'>
              <div className='w-10 h-10 bg-gray-500 rounded-lg mr-2'>
                <img src={value.pic} alt="img" className='object-cover w-full h-full rounded-lg' />
              </div>
              <span className='flex flex-col h-10' >
                <div className='font-semibold text-sm'>{`Tischnummer: ${value.tabelNo}`}</div>
                <button className='font-light text-white text-xs'>Rechnung Ansehen</button>
              </span>
            </div>

            <div className='flex flex-col'>
              <div className='text-xs'>100%</div>
              <div className='w-24 h-1 rounded-lg bg-blue-500'></div>
            </div>

            <div className='flex items-center justify-center font-semibold text-white text-xs rounded-xl'>
              <span className="w-24">
                {value.paymentMethod}
                <div className='flex items-center gap-1'>
                  {value.paymentMethod === "Master Card" || value.paymentMethod === "Visa Card" ? (
                    <img src="/PaymentPage/masterCard.png" alt="MasterCard" className="w-8 h-6 rounded-xl" />
                  ) : value.paymentMethod === "Cash" ? (
                    <img src="/PaymentPage/cash.png" alt="Cash" className=" bg-black w-8 h-6 rounded-xl" />
                  ) : null}
                  <div className='font-light text-xs'>{value.cardNo}</div>
                </div>
              </span>
            </div>

            <button className={`cursor-default w-32 font-semibold h-8 text-sm flex justify-center items-center border-[1px] rounded-xl ${value.status === "Bezahlt" ? 'bg-[#01B574]' : value.status === "Rückerstattet" ? 'bg-[#FF0000]' : ''}`}>
              <div>{value.status}</div>
            </button>

            <div className='font-light text-white text-sm'>
              {value.date}
            </div>

            <Tooltip content="See receipt" className='text-white w-20 rounded-lg p-2 bg-[#0075ff] text-xs cursor-pointer'>
              <button className='flex gap-2' onClick={onOpen}>
                <FontAwesomeIcon icon={faFile} />
                <div className='font-light text-sm'>PDF</div>
              </button>
            </Tooltip>
          </div>
        ))}
      </div>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Invoice</ModalHeader>
          <ModalBody>
  <div className='flex w-full h-auto flex-col flex-wrap'>
    {data1.map((value, index) => (
      <div className='flex w-full text-xl gap-2' key={index}>
        <div className=' font-semibold'>{value.iteam}</div>
        <div className='flex w-full justify-end font-bold'><p></p>{value.cost}$</div>
      </div>
    ))}
  </div>
</ModalBody>

          <ModalFooter>
            <Button color="danger" variant="light" onClick={onClose}>
              Close
            </Button>
            <Button color="primary" onClick={onClose}>
              Print
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};


const data = [
  { pic: "/PaymentPage/customer_1.png", tabelNo: "2", paymentMethod: "Master Card", status: "Bezahlt" ,cardNo:"12231xxx",date:"14.06.23  / 14:32 " },
  { pic: "/PaymentPage/customer_2.png", tabelNo: "20", paymentMethod: "Visa Card", status: "Offen",cardNo:"12231xxx",date:"14.06.23  / 14:32 " },
  { pic: "/PaymentPage/customer_3.png", tabelNo: "25", paymentMethod: "Visa Card", status: "Bezahlt",cardNo:"12231xxx" ,date:"14.06.23  / 14:32 "},
  { pic: "/PaymentPage/customer_1.png", tabelNo: "30 ", paymentMethod: "Cash", status: "Rückerstattet",cardNo:"Cash",date:"14.06.23  / 14:32 " },
  { pic: "/PaymentPage/customer_1.png", tabelNo: "2", paymentMethod: "Master Card", status: "Bezahlt" ,cardNo:"12231xxx",date:"14.06.23  / 14:32 " },
  { pic: "/PaymentPage/customer_2.png", tabelNo: "20", paymentMethod: "Visa Card", status: "Offen",cardNo:"12231xxx",date:"14.06.23  / 14:32 " },
];

const HomePage = () => {
  return (
    <div>
      <Payments data={data} />
    </div>
  );
};

export default HomePage;


const data1=[
  {iteam:"pizza",cost:12},
  {iteam:"cake",cost:21},
  {iteam:"burger",cost:26},
  {iteam:"Pulao",cost:1000},
  {iteam:"Shwarma",cost:100},

]

