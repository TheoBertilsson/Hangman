import React from "react";

const AlreadyPressedNotification = ({ showNotification }) => {
  return (
    <>
      {showNotification && (
        <div className="notificationBox">
          <p>You have already entered this letter!</p>
        </div>
      )}
    </>
  );
};

export default AlreadyPressedNotification;
