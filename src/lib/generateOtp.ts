import otp from "otp-generator";

const otpGenerate = () => {
  return otp.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
};
export default otpGenerate;
