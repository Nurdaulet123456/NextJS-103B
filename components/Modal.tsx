

const Modal = ({...props}) => {

    const handleClose = (e: any) => {
        if (e.target.className === 'modal_inner') {
            props.click()
        }
        console.log(e.target.className)
    }

    return(
        <div className="modal" onClick={handleClose}>
            <div className="modal_inner">
                <div className="modal_content">
                    <button className="btn">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal