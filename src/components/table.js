import React from 'react';
import '../styles/global.css';

const Table = ({ data }) => {
  return (
    <table className="table">
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="table-cell">{row.label}</td>
            <td className="table-cell">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;