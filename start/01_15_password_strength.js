function passwordStrength(password) {
  const matchRegex = (/[a-zA-Z0-9]{8,}/g).test(password);
  const matchPunc = (/[!@#$%^&*]/g).test(password);
  const ans = (matchRegex && matchPunc) 
    ? "Your password is Valid." 
    : "Your password is Invalid.";

  return ans;
}

console.log(passwordStrength("Amaan123@"));