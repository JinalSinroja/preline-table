const HTable = ({ tableData, title }) => {
  const values = Object.values(tableData);
  return (
    <div className="pb-1">
      <table className="border min-w-full overflow-x-auto">
        <thead className="bg-stone-100">
          <tr>
            <th className="min-w-[200px] px-6 py-3 border text-start text-sm font-medium text-gray-500 uppercase">
              {title}
            </th>
            {values[0].map((value) => (
              <th key={value} className="px-6 py-3 border"></th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-gray-200">
          {Object.keys(tableData).map((subKey) => {
            const data = tableData[subKey];
            return (
              <tr key={subKey} className="">
                <th className="px-6 py-3 min-w-[200px] border text-start text-sm font-medium text-gray-800">
                  {subKey}
                </th>
                {data.map((value, index) => {
                  return (
                    <td
                      key={index}
                      className="px-6 py-3 border min-w-[200px] text-start text-sm font-medium text-gray-800"
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HTable;
