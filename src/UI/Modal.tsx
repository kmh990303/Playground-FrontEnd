import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

// ModalHandles 타입 정의
interface ModalHandles {
    open: () => void;
    close: () => void;
}

// forwardRef를 사용하여 ref를 ModalHandles 타입으로 정의
const Modal = forwardRef<ModalHandles, {}>((props, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [time, setTime] = useState<number>(5000);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevState) => {
                const newTime = prevState - 1000;
                if (newTime <= 0) {
                    clearInterval(interval);
                    dialogRef.current?.close();
                    return 0;
                }

                return newTime
            })
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    // useImperativeHandle을 사용하여 ModalHandles 객체의 메서드를 정의
    useImperativeHandle(ref, () => ({
        open: () => {
            dialogRef.current?.showModal();
        },
        close: () => {
            dialogRef.current?.close();
        }
    }), []);

    const modalRoot = document.getElementById('modal');
    if (!modalRoot) return null;


    return createPortal(
        <dialog ref={dialogRef} className="p-16 backdrop:bg-blue-500/15">
            <progress className="mb-8" value={5000 - time} max={5000} />
            <h2 className="mb-4 text-center">Hello? Mr. ppp</h2>
            <p className="mb-4 text-center">You know what?</p>
            <button onClick={() => dialogRef.current?.close()} className="block mx-auto">Close</button>
        </dialog>,
        modalRoot
    );
});

export default Modal;
