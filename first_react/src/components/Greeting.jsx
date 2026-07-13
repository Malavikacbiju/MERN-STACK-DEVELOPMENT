import React from 'react'//rafce

const Greeting = () => {
    let message = "";
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
        message = "Good Morning";
    } else if (currentTime < 18) {
        message = "Good Afternoon";
    } else {
        message = "Good Evening";
    }
  return (
    <div>
        <h2>{message}</h2>
    </div>
  );
};
export default Greeting