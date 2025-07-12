import React, { useState } from 'react';
import styles from './styled.module.scss';

const Pump = () => {
  const [pumpData, setPumpData] = useState([ ]);

  const [showForm, setShowForm] = useState(false);
  const [newPump, setNewPump] = useState({
    name: '',
    type: '',
    status: '',
    location: '',
  });

  const handleInputChange = (e) => {
    setNewPump({
      ...newPump,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPump = () => {
    setPumpData([
      ...pumpData,
      { ...newPump, id: pumpData.length + 1 },
    ]);
    setNewPump({
      name: '',
      type: '',
      status: '',
      location: '',
    });
    setShowForm(false);
  };

  return (
    <div className={styles.pumpContainer}>
      <div className={styles.header}>
        <h1>Pump Details</h1>
        <button
          className={styles.addBtn}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Pump'}
        </button>
      </div>

      {showForm && (
        <div className={styles.formWrapper}>
          <h2>Add New Pump</h2>
          <form className={styles.pumpForm} onSubmit={(e) => {
            e.preventDefault();
            handleAddPump();
          }}>
            <div className={styles.formRow}>
              <label>Pump Name</label>
              <input
                type="text"
                name="name"
                value={newPump.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formRow}>
              <label>Type</label>
              <input
                type="text"
                name="type"
                value={newPump.type}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formRow}>
              <label>Status</label>
              <select
                name="status"
                value={newPump.status}
                onChange={handleInputChange}
                required
              >
                <option value="">-- Select Status --</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className={styles.formRow}>
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={newPump.location}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formActions}>
              <button type="submit" className={styles.saveBtn}>Save</button>
              <button type="button" className={styles.cancelBtn} onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

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
