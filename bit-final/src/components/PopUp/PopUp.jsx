import React, { useState } from 'react';
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

export default function PopUp() {
  const [gridModal, setGridModal] = useState(false);

  const toggleShow = () => setGridModal(!gridModal);

  return (
    <>
    {/* Ovo sam ostavila da bih mogla da proveravam funkcionalnost, treba obrisati */}
      <MDBBtn onClick={toggleShow}>Candidate:</MDBBtn>

      <MDBModal tabIndex='-1' show={gridModal} setShow={setGridModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Josefina Higgins</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow>
                <MDBCol>
                  <MDBRow>
                    <MDBCol>
                      <p>Company:</p>
                    </MDBCol>
                    <MDBCol>
                      <p>Google</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p>Interview Date:</p>
                    </MDBCol>
                    <MDBCol>
                      <p>20/12/2017</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p>Phase:</p>
                    </MDBCol>
                    <MDBCol>
                      <p>Tech</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p>Status:</p>
                    </MDBCol>
                    <MDBCol>
                      <p>Passed</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <p>Notes:</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec convallis massa at tortor bibendum, a luctus ipsum
                    commodo. Nunc vulputate quam eros, in eleifend est
                    dignissim at. Sed posuere lectus sed metus bibendum, non
                    maximus enim interdum.
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
