import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Tables from "@/Components/Tables";
import React, { useEffect, useState } from "react";

export default function Dashboard(props) {
    const getItems = props.items;
    const [getLoggedIn, setLoggedIn] = useState(true);
    console.log(props);

    useEffect(() => {
        setTimeout(() => {
            setLoggedIn((prevState) => !prevState);
        }, 2500);
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-6 m-5 md:m-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {getLoggedIn ? <Toast name={props.auth.user.name} /> : null}
                    <section className="flex flex-row justify-end mb-4">
                        <UploadButton />
                    </section>
                    <Tables items={getItems} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

const UploadButton = () => {
    return (
        <div>
            <Link href="/create">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    + Upload Data
                </button>
            </Link>
        </div>
    );
};

function Toast({ name }) {
    return (
        <div className="toast toast-top toast-center">
            <div className="alert alert-success w-48">
                <div className="flex flex-row items-center justify-center w-full">
                    <span className="font-bold">Halo, {name}!</span>
                </div>
            </div>
        </div>
    );
}
