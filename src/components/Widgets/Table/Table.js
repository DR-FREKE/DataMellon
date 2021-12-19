import React from "react";
import { connect } from "react-redux";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { IoWarning } from "react-icons/io5";
import { Loader } from "../Loader/Loader";
import { TableDiv } from "./table.style";

const Table = props => {
  const key =
    props.tableData &&
    props.tableData.length > 0 &&
    Object.keys(props.tableData[0]);

  return (
    <>
      <TableDiv className="shadow w-full flex justify-center overflow-auto border-b border-gray-200 sm:rounded-lg">
        {props.tableData && props.tableData.length < 1 ? (
          <div className="flex justify-center items-center py-10 px-5">
            <span className="md:text-sm text-sm px-5 py-3 flex items-center leading-5 rounded-lg bg-gray-50 text-gray-500">
              <IoWarning size={20} /> There are currently no available data for
              this service
            </span>
          </div>
        ) : (
          <table className="table-fixed min-w-full divide-y divide-gray-200">
            {props.loading ? (
              <div className="flex justify-center py-5 px-5">
                <Loader loading={props.loading} />
              </div>
            ) : (
              // props.error != "" ? (
              //   <div className="flex justify-center items-center py-10 px-5">
              //     <span className="md:text-base text-sm">{props.error}</span>
              //   </div>
              // ) :
              <>
                <thead className="bg-gray-50">
                  <tr>
                    {props.tableData &&
                      Object.keys(props.tableData[0]).map(content => (
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {content != "id" && content}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {props.tableData &&
                    props.tableData.map((content, index) => (
                      <tr key={index}>
                        {key.map(key_name => (
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {key_name != "id" && content[key_name]}
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </>
            )}
          </table>
        )}
      </TableDiv>
    </>
  );
};

export default connect(null, {})(Table);
