import closeIcon from "./closeIcon"


export default function Modal({ children, onClose }) {
    return (
        <dialog>
            <button onClick={onClose}>{closeIcon}</button>
            { children }
        </dialog>
    )
}