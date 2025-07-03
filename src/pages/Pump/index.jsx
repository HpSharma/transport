import React from 'react';
import styles from './styled.module.scss';

const Pump = () => {
  const pumpData = [
    {
      id: 1,
      name: 'Main Pump 1',
      type: 'Diesel',
      status: 'Active',
      location: 'Plant A',
    },
    {
      id: 2,
      name: 'Backup Pump',
      type: 'Electric',
      status: 'Inactive',
      location: 'Plant B',
    },
    // Add more dummy data if needed
  ];

  return (
    <div className={styles.pumpContainer}>
      <div className={styles.header}>
        <h1>Pump Details</h1>
        <button className={styles.addBtn}>Add New Pump</button>
      </div>

      <table className={styles.pumpTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pumpData.map((pump) => (
            <tr key={pump.id}>
              <td>{pump.id}</td>
              <td>{pump.name}</td>
              <td>{pump.type}</td>
              <td>{pump.status}</td>
              <td>{pump.location}</td>
              <td>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.statusBtn}>Status</button>
                <button className={styles.deleteBtn}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pump;
