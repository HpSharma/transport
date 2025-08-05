import React from 'react';

const CommonTable = ({ columns = [], data = [], renderRow, headerStyle = {}, cellStyle = {} }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
      <tr>
        {columns.map((col, idx) => (
          <th key={idx} style={headerStyle}>{col}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {data.length > 0 ? (
        data.map((item, index) =>
          renderRow ? (
            renderRow(item, index)
          ) : (
            <tr key={index}>
              {columns.map((colKey, i) => (
                <td key={i} style={cellStyle}>
                  {item[colKey.toLowerCase().replace(/\s/g, '_')]} {/* smart match */}
                </td>
              ))}
            </tr>
          )
        )
      ) : (
        <tr>
          <td colSpan={columns.length} style={{ textAlign: 'center', padding: '10px' }}>
            No data found
          </td>
        </tr>
      )}
      </tbody>
    </table>
  );
};

export default CommonTable;
