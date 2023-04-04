import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../../service/service";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBRow,
    MDBCol,
  } from 'mdb-react-ui-kit';
  

const Modal = ({open, isOpen, onClose, data}) => {
    const [info, setInfo] = useState([]);

    const initData = async () => {
      const dataResult = await getData("reports?id="+data);
      if (dataResult != null && dataResult.length > 0) {
        setInfo(dataResult[0]);
      }
    };
  
    useEffect(() => {
      initData();
    }, [data]);

    // const [gridModal, setGridModal] = useState(open);

    if (!open) return null;

    return (
        // <div className="styles.overlay">
        // <p onClick={onClose} style={{ cursor: "pointer" }}>X</p>
        // <div>{info[0].candidateName}</div>
        // </div>
    <>
        <MDBModal tabIndex='-1' show={open} setShow={isOpen}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{info.candidateName}</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={onClose}
              ></MDBBtn>
            {/* <p onClick={onClose} style={{ cursor: "pointer" }}>X</p> */}
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow>
                <MDBCol>
                  <MDBRow>
                    <MDBCol>
                      <p>Company:</p>
                    </MDBCol>
                    <MDBCol>
                      <p>{info.companyName}</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p>Interview Date:</p>
                    </MDBCol>
                    <MDBCol>
                      <p>{new Date(info.interviewDate).toLocaleDateString()}</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p>Phase:</p>
                    </MDBCol>
                    <MDBCol>
                      <p>{info.phase}</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p>Status:</p>
                    </MDBCol>
                    <MDBCol>
                      <p>{info.status}</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <p>Notes:</p>
                  <p>
                    {info.note}
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
);
}

export default Modal;
