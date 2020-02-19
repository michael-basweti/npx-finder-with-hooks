import React from 'react'

const Alert = (alert) => {
    console.log(alert.alert);
    
    return (
        alert.alert!== null && (
      <div className={`alert alert-${alert.alert.type}`}>
          <i className="fas fa-info-circle"></i> {alert.alert.msg}
      </div>
        )
    )
}

export default Alert
