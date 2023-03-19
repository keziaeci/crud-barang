import React from "react";
import { Link, router } from "@inertiajs/react";
// import { Inertia } from "@inertiajs/inertia";
const Tables = (props) => {
    const option = ["ID", "Name", "Description", "Action"];

    // const deleteItem = async (id, nama) => {
    //     MySwal.fire({
    //         title: "Are you sure?",
    //         text: `You are about to delete ${nama}.`,
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#d33",
    //         cancelButtonColor: "#3085d6",
    //         confirmButtonText: "Yes, delete it!",
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           Inertia.get(`/delete/${id}`).then(() => {
    //             Inertia.reload();
    //             });
    //         }
    //       });
    // };

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
                                    <Link href={`/delete/${item.id}`}>
                                    <button
                                        onClick={() =>
                                            deleteItem(item.id, item.name)
                                        }
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Delete
                                    </button>
                                    </Link>
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
