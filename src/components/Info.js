import { useState } from 'react';

export default function Info() {

  return (
    <>
      <h2>General Information</h2>
      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" type="text" name="firstName"></input>

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" type="text" name="LastName"></input>

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email"></input>

      <label htmlFor="phone">Phone Number:</label>
      <input id="phone" type="tel" name="phone"></input>
    </>
  );

}
