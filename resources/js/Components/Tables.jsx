import React from "react";

const Tables = (props) => {
    const option = ["ID", "Name", "Description", "Action"];
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        {option.map((item, index) => (
                            <th className="bg-blue-200 px-4 py-2 text-center" key={index}>
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {props.items.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2 text-center">{index + 1}</td>
                            <td className="border px-4 py-2 text-center">{item.name}</td>
                            <td className="border px-4 py-2 text-center">
                                {item.description}
                            </td>
                            <td className="border px-4 py-2">
                                <div className="flex justify-center gap-x-4">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
