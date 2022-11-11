import React, { useState } from 'react'
import { BsShare, BsFillHeartFill } from "react-icons/bs";
import Imagen from '../images/dpto3.jpg';
import { GrLocation } from "react-icons/gr";
import { FaBed, FaToilet} from "react-icons/fa";
import { MdPhotoSizeSelectSmall } from "react-icons/md";
import '../styles/product.css'

export const Product = ({item}) => {

    const [isClicked, setIsCliked] = useState(false);
    const [color, setcolor] = useState('');
    const changeColor = () => {
        setIsCliked(!isClicked);
        isClicked ? setcolor('red') : setcolor('');
    }
  return (
    <>
        <div className='border rounded d-flex card target my-2' style={{maxWidth: '540px'}}>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img src={Imagen} alt="..." className='imagen rounded-start'/>
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-around align-items-center mb-2'>
                            <div className='text-muted description'>En Alquiler</div>
                            <div className='text-muted description'>Nuevo</div>
                            <button className='boton'>
                                <BsShare />
                            </button>
                            <button onClick={ ()=> changeColor() } className="boton">
                                <BsFillHeartFill className={`${color}`} />
                            </button>
                        </div>
                        <p className='card-title text-center '>{item.titulo}</p>
                        <div className='d-flex align-items-center justify-content-center'>
                            <GrLocation/>
                            <div className='mx-2 my-2 description'>{item.ciudad}</div>
                        </div>
                        <p className='fw-bold h5 text-success text-center'>${item.precio}</p>
                        <div className='d-flex justify-content-around'>
                            <div>
                                <FaBed className='mx-2'/>
                                {item.habitaciones}
                            </div>
                            <div>
                                <FaToilet className='mx-2'/>
                                {item.baños}
                            </div>
                            <div>
                                <MdPhotoSizeSelectSmall className='mx-2'/>
                                {item.metros}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
