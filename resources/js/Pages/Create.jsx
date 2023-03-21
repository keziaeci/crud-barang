import React, { useState, useRef, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";

const Create = (props) => {
    console.log(props);

    useEffect(() => {
        if (!props.auth.user) {
            router.get("/login");
        }},[] );

    const handlerSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current;
        const description = descriptionRef.current;
        router.post("/store", { name, description });
    };

    const formRef = useRef();
    const nameRef = useRef("");
    const descriptionRef = useRef("");

    const nameHandler = (e) => {
        nameRef.current = e.target.value;
    };
    const descriptionHandler = (e) => {
        descriptionRef.current = e.target.value;
    };
    const clearHandler = () => {
        formRef.current.reset();
    };

    return props.auth.user ? (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create
                </h2>
            }
        >
            <Head title="Create" />

            <div className="py-6 m-5 md:m-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form ref={formRef} onSubmit={handlerSubmit}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="shadow border-none rounded w-full py-2 px-3 text-gray-700   "
                                id="name"
                                type="text"
                                placeholder="Name"
                                ref={nameRef}
                                onChange={nameHandler}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Description
                            </label>
                            <input
                                className="shadow border-none rounded w-full py-2 px-3 text-gray-700 "
                                id="description"
                                type="text"
                                placeholder="Description"
                                ref={descriptionRef}
                                onChange={descriptionHandler}
                            />
                        </div>
                        <ButtonComponent clearHandler={clearHandler} />
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    ) : null;
};

export default Create;

function ButtonComponent({ clearHandler }) {
    return (
        <div className="flex flex-row justify-between mb-4">
            <button
                onClick={clearHandler}
                type="reset"
                className="btn btn-warning text-black text-opacity-70"
            >
                Clear All
            </button>
            <button type="submit" className="btn btn-success text-white shadow">
                + &nbsp; Submit
            </button>
        </div>
    );
}