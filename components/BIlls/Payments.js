"use client";
import { faCross, faFile, faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {Tooltip, Button} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FaFilePdf, FaDownload } from 'react-icons/fa';

const Payments = ({ data ,...props}) => {
const [invoice, invoiceOpen] = useState(false);
  
  return (
    <div className='h-screen flex flex-col bg-sideBarcol rounded-xl z-0'>
      <p className='text-white text-2xl font-bold p-4'>Rechnungen</p>
      <div className='flex flex-col gap-1'>
        <div className='flex w-full justify-end items-center gap-28 pr-32 text-white font-semibold text-sm'>
          <p>Zahlungsmittel</p>
          <p>STATUS</p>
          <p>EMPLOYED</p>
        </div>
      {data.map((value, index) => (
        <div key={index} className='w-full h-auto flex p-4 border-b justify-between gap-6 text-white items-center'>
          {/* Placeholder for customer picture */}
            <div className='flex'>
              <div className='w-10 h-10 bg-gray-500 rounded-lg mr-2'>
                <img src={value.pic} alt="img" className='object-cover w-full h-full rounded-lg' />
              </div>
              <span className='flex flex-col h-10' >
                <p className='font-semibold text-sm'>{`Tischnummer: ${value.tabelNo}`}</p>
                <button className='font-light text-white text-xs'>Rechnung Ansehen</button>
              </span>
          </div>

          <div className='flex flex-col'>
              <p className='text-xs'>100%</p>
              <div className='w-24 h-1 rounded-lg bg-blue-500'></div>
          </div>

          <div className='flex items-center justify-center font-semibold text-white text-xs rounded-xl'>
            <span className="w-24">
              {value.paymentMethod}
              <div className='flex items-center gap-1'>
              {value.paymentMethod === "Master Card" || value.paymentMethod === "Visa Card" ? (
                <img src="/PaymentPage/masterCard.png" alt="MasterCard" className="w-8 h-6 rounded-xl" />
              ) : value.paymentMethod==="Cash" ? (
                <img src="/PaymentPage/cash.png" alt="Cash" className=" bg-black w-8 h-6 rounded-xl" />
              ) : null}
              <p className='font-light text-xs'>{value.cardNo}</p>
              </div>
            </span>
          </div>

          <button className={`cursor-default w-32 font-semibold h-8 text-smflex justify-center items-center border-[1px] rounded-xl ${value.status === "Bezahlt" ? 'bg-[#01B574]' : value.status === "Rückerstattet" ? 'bg-[#FF0000]' : ''}`}>
            <p>{value.status}</p>
          </button>

          <div className='font-light text-white text-sm'>
            {value.date}
          </div>


          
          <Tooltip content="See recipt" className='text-white w-20 rounded-lg p-2 bg-[#0075ff] text-xs cursor-pointer' >
          <button className='flex gap-2' onClick={() => {invoiceOpen(true); console.log('clikced')}}>
            <FontAwesomeIcon icon={faFile}/>
            <p className='font-light text-sm'>PDF</p>
            {invoice && <Invoice/>}
          </button>
          </Tooltip>
        </div>
      ))}
      </div>
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





const Invoice = () => {
  const items = [
    { name: 'Item 1', price: 25.99 },
    { name: 'Item 2', price: 19.99 },
    { name: 'Item 3', price: 15.49 },
  ];

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const downloadPDF = async () => {
    const invoiceContainer = document.getElementById('invoiceContainer');

    try {
      const canvas = await html2canvas(invoiceContainer);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      pdf.save('invoice.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className='absolute top-2 left-[50%] translate-x-[-50%] w-[20rem] bg-gray-200 p-6 text-black text-2xl' id="invoiceContainer">
      <div className='absolute right-8 text-[red]'><FontAwesomeIcon icon={faXmark}/></div>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-4">Invoice</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Items</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-xl">${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center"
            onClick={downloadPDF}
          >
            <FaFilePdf className="mr-2" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

// export default Invoice;
