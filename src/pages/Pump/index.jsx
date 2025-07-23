import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import styles from './styled.module.scss';

const initialPumpStates = {
  name: '',
  type: '',
  status: '',
  location: '',
};

const Pump = () => {
  const [pumpData, setPumpData] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const handleAddPump = (data) => {
    setPumpData([...pumpData, { ...data, id: pumpData.length + 1 }]);
    setShowForm(false);

  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: initialPumpStates,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

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
          <form
            className={styles.pumpForm}
            onSubmit={handleSubmit(handleAddPump)}
          >
            <div className={styles.formRow}>
              <label>Pump Name</label>
              <Controller
                name={'name'}
                control={control}
                rules={{ required: 'Enter name' }}
                render={({ field: { onChange, value } }) => (
                  <input type="text" value={value} onChange={onChange} />
                )}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className={styles.formRow}>
              <label>Type</label>
              <Controller
                name={'type'}
                control={control}
                rules={{ required: 'Enter type' }}
                render={({ field: { onChange, value } }) => (
                  <input type="text" value={value} onChange={onChange} />
                )}
              />
              {errors.type && <span>{errors.type.message}</span>}
            </div>
            <div className={styles.formRow}>
              <label>Status</label>
              <Controller
                name={'status'}
                control={control}
                rules={{ required: 'Enter status' }}
                render={({ field: { onChange, value } }) => (
                  <select name="status" value={value} onChange={onChange}>
                    <option value="">-- Select Status --</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                )}
              />
              {errors.status && <span>{errors.status.message}</span>}

            </div>
            <div className={styles.formRow}>
              <label>Location</label>
              <Controller
                name={'location'}
                control={control}
                rules={{ required: 'Enter location' }}
                render={({ field: { onChange, value } }) => (
                  <input type="text" value={value} onChange={onChange} />
                )}
              />
              {errors.location && <span>{errors.location.message}</span>}

            </div>
            <div className={styles.formActions}>
              <button
                type="submit"
                className={styles.saveBtn}
                disabled={!isValid || isSubmitting}
              >
                Save
              </button>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
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