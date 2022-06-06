import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-warning" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
