import PropTypes from "prop-types";
import React from 'react'

import ModalWrapper from './ModalWrapper'
import Modal from './Modal'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ModalClose from './ModalClose'

const ModalBase = ({title, desc}) => {
    return (
        <ModalWrapper>
            <Modal>
                <ModalHeader>
                    <ModalClose />
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </ModalHeader>
                <ModalBody>
                    Modal Body
                </ModalBody>
                <ModalFooter firstText="Ok" secondText="Cancel" />
            </Modal>
        </ModalWrapper>
    )
}

ModalBase.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    handleClose: PropTypes.func,
    handleOk: PropTypes.func
}

export default ModalBase