import React, { MouseEventHandler, ReactEventHandler, Suspense } from 'react';
import { useRouter } from 'next/router'

type Props = {
    nextPageURL: string,
    title: string
}

const ConfirmButton = ({nextPageURL,title}:Props) => {

    const router = useRouter()

    const submitForm = () => {
        console.log("-- CLICKED --")
        router.push(nextPageURL)
    }

    return (
        <button className="button-85" onClick={submitForm}>{title}</button>
    );
};

export default ConfirmButton