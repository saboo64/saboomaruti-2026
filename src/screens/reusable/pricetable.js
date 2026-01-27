import React from "react";

const PriceTable = ({ sections = [], disclaimer }) => {
  return (
    <div className="overflow-scroll uppercase shadow-sm md:overflow-hidden rounded-2xl">
     <table className="w-full uppercase bg-white border border-collapse rounded-lg shadow-md table-auto min-w-max">
  {sections.map((section, sectionIndex) => (
    <React.Fragment key={sectionIndex}>
      {/* Section Title */}
      {section.title && (
        <caption className="px-4 py-2 text-lg font-semibold text-left text-gray-800 uppercase bg-gray-100">
          {section.title}
        </caption>
      )}

      {/* Table Header */}
      <thead className="text-white uppercase bg-blue-800">
        <tr>
          {section.headers.map((header, i) => (
            <th
              key={i}
              className="px-4 py-3 text-sm font-semibold text-left uppercase"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="text-gray-700 ">
        {section.rows.map((row) => (
          <tr
            key={row.id}
            className="uppercase border-b border-gray-200 hover:bg-gray-100"
          >
            {section.columns.map((col, i) => (
              <td key={i} className="px-4 py-3 ">
                {row[col]} {col === "mileage" && <sup>*</sup>}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </React.Fragment>
  ))}
</table>
      {/* Disclaimer */}
      {disclaimer && (
        <div className="overflow-scroll md:overflow-hidden">
          <p className="container w-full pb-6 mx-auto mt-2 text-sm italic text-left text-red-500 font-extralight">
            <span className="font-semibold">Disclaimer:</span> {disclaimer}
          </p>
        </div>
      )}
    </div>
  );
};

export default PriceTable;
