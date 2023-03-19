import React from "react";
import { Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Tables = (props) => {
    const option = ["ID", "Name", "Description", "Action"];
    const MySwal = withReactContent(Swal);


    const deletePost = async (id, nama) => {
        MySwal.fire({
            title: "Apakah kamu yakin?",
            text: `Kamu akan menghapus ${nama}.`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/delete/${id}`);
            }
        });
    };

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        {option.map((item, index) => (
                            <th
                                className="bg-blue-200 px-4 py-2 text-center"
                                key={index}
                            >
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {props.items.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2 text-center">
                                {index + 1}
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {item.name}
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {item.description}
                            </td>
                            <td className="border px-4 py-2">
                                <div className="flex justify-center gap-x-4">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Edit
                                    </button>

                                    <button
                                        type="submit"
                                        onClick={() =>
                                            deletePost(item.id, item.name)
                                        }
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tables;
