import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Tables from "@/Components/Tables";
import React, { useEffect, useState } from "react";

export default function Dashboard(props) {
    const getItems = props.items;
    console.log(props);
    const [getLoggedIn, setLoggedIn] = useState(true);

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

            <div className="py-12 m-5 md:m-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {getLoggedIn ? (
                        <div className="toast toast-top toast-center">
                            <div className="alert alert-success w-48">
                                <div className="flex flex-row items-center justify-center w-full">
                                    <span className="font-bold">
                                        Halo, {props.auth.user.name}!
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    {/* {getItems.map((item, index) => (
                        <p>
                            {item.name} - {item.description}
                        </p>
                    ))} */}
                    <Tables items={getItems} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
