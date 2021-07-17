export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// export const passwordRegex = /^([a-zA-Z0-9]{8,})$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])([a-zA-Z0-9]{8,})$/i;

export const phoneNumberRegex = /^\d{11}$/;

export const birthDateRegex = /^\d{6}$/;
