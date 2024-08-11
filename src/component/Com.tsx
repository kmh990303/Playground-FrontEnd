import React, { ChangeEvent, memo, useEffect, useCallback, useMemo, useRef, useState } from "react";
import Modal from "../UI/Modal";
import { dummyData } from "../dummy/dummy";


interface ModalHandles {
    open: () => void;
    close: () => void;
}

interface dummyType {
    id: string,
    name: string,
    description: string,
}

interface PropsType {
    num: number;
    setNum: React.Dispatch<React.SetStateAction<number>>;
}

const Com: React.FC<PropsType> = ({ num, setNum }) => {
    const text = useRef<HTMLInputElement>(null);
    const modalRef = useRef<ModalHandles>(null);
    const [par, setPar] = useState<string>('');
    const [dummy, setDummy] = useState<dummyType[]>([]);
    const [searchId, setSearchId] = useState<string>('');
    const [findResult, setFindResult] = useState<dummyType | undefined>({
        id: '',
        name: '',
        description: ''
    });


    useEffect(() => {
        setDummy(dummyData);
    }, [])


    const ChangeHandler = useCallback(() => {
        if (text.current) {
            setPar(text.current.value);
        }
    }, [])

    const buttonClickHandler = useCallback(() => {
        modalRef.current?.open();
    }, [])

    const deleteHandler = useCallback((id: string) => {
        setDummy((prevState) => {
            return [...prevState.filter((data) => data.id !== id)]
        })
    }, [])

    const searchIdChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchId(e.target.value);
    }, [])

    const searchIdHandler = useCallback((id: string) => {
        let result;

        result = dummy.find((data) => data.id === id);

        setFindResult(result);
    }, [])

    const clickHandler = useCallback(() => {
        setNum((prevState) => {
            return prevState + 5;
        })
    }, [])

    const specialNumber = useMemo(() => {
        return num + 1000;
    }, [num])

    return (
        <>
            <div className="mb-8">
                <input type="text" name="txt" ref={text} onChange={ChangeHandler} className="border-2 border-blue-500 block mx-auto mb-8" />
                <p className="text-center mb-8">
                    {par}
                </p>
                <button onClick={buttonClickHandler} className="block mx-auto border-2 border-blue-700">
                    Show!!! Modal!!!!
                </button>
                <Modal ref={modalRef} />
            </div>
            {/* <div className="text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {dummy.map((data) => (
                    <li key={data.id} className="mb-12">
                        <div className="block mx-auto">
                            <h2>{data.name}</h2>
                            <p className="mb-4">{data.description}</p>
                            <button onClick={() => deleteHandler(data.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </div> */}
            {/* <div className="mx-auto text-center flex flex-col gap-4">
                <input type="text" value={searchId} name="searchId" onChange={searchIdChangeHandler} className="border-2 border-red-500 mx-8" />
                <button onClick={() => searchIdHandler(searchId)}>Search</button>
                {findResult && (
                    <div>
                        {findResult.name && findResult.description && <p>Find Success!!!</p>}
                        <h3>{findResult.name}</h3>
                        <p>{findResult.description}</p>
                    </div>
                )}
            </div> */}
            <div>
                <p>{num}</p>
                <button onClick={clickHandler}>change-COM</button>
                <p>Special Number : {specialNumber}</p>
            </div>
        </>
    )
}

export default memo(Com);
