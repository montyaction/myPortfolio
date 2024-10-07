export const isEmailValid = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
 };

export const isPhoneNumberValid = (phoneNumber) => {
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(phoneNumber);
};