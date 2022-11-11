import React from 'react'
import { BsFillHouseDoorFill, BsBuilding,  } from "react-icons/bs";
import { BiBuilding, BiBuildingHouse } from "react-icons/bi";
import '../styles/filterProduct.css'
export const FilterProduct = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center contenedor">
        <div className="formulario d-flex flex-column align-items-center ">
          <h5 className="fw-bold my-2">Ubicación</h5>
          <form className="col-12 col-sm-8 col-lg-6">
            <input type="text" className="form-control" />
          </form>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h5 className="fw-bold my-2">Tipo de propiedad</h5>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <div className="mx-2 col-6">
                <BsFillHouseDoorFill />
                <p>Casa</p>
              </div>
              <div className="mx-2 col-6">
                <BsBuilding />
                <p>Departamento</p>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <div className="mx-2 col-6">
                <BiBuilding />
                <p>Proyecto</p>
              </div>
              <div className="mx-2 col-6">
                <BiBuildingHouse />
                <p>Lanzamiento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
