import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import {
  tableHeaderStyle,
  tableCellStyle

} from '@pages/Dashboard/StyledComponent.jsx';

import styles from './styled.module.scss';
import { TextInput } from '@components/Input/index.jsx';
import { AddButtons } from '@components/common/Button/buttons.jsx';
import CommonTable from '@components/Table/index.jsx';

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
    reset(initialPumpStates);
  };

  const {
    control,
    handleSubmit,
    reset,

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

        <AddButtons
          className={styles.addBtn}
          onClick={() => setShowForm(!showForm)}
        >
          {' '}
          {showForm ? 'Cancel' : 'Add New Pump'}
        </AddButtons>
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
                  <>
                    <TextInput type="text" value={value} onChange={onChange} />
                  </>
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
                  <TextInput type="text" value={value} onChange={onChange} />
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
                  <TextInput type="text" value={value} onChange={onChange} />
                )}
              />
              {errors.location && <span>{errors.location.message}</span>}
            </div>
            <div className={styles.formActions}>
              <AddButtons type="submit" disabled={!isValid || isSubmitting}>
                Save
              </AddButtons>

              <AddButtons
                onClick={() => {
                  setShowForm(false);
                  reset(initialPumpStates);
                }}
                variant="danger"
              >
                Cancel
              </AddButtons>
            </div>
          </form>
        </div>
      )}
      <CommonTable
        columns={['ID', 'Name', 'Type', 'Status', 'Location', 'Actions']}
        data={pumpData}
        renderRow={(pump, index) => (
          <tr key={pump.id}>
            <td style={tableCellStyle}>{pump.id}</td>
            <td style={tableCellStyle}>{pump.name}</td>
            <td style={tableCellStyle}>{pump.type}</td>
            <td style={tableCellStyle}>{pump.status}</td>
            <td style={tableCellStyle}>{pump.location}</td>
            <td style={tableCellStyle}>
              <button className={styles.editBtn}>Edit</button>
              <button className={styles.statusBtn}>Status</button>
              <button className={styles.deleteBtn}>Delete</button>
            </td>
          </tr>
        )}
        headerStyle={tableHeaderStyle}
        cellStyle={tableCellStyle}
      />
    </div>
  );
};

export default Pump;
