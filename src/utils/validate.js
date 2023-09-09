 export const checkValidData=(email,password,name)=>{

    const isEmailValid=/^([a-z A-Z 0-9._%-]+@[a-z A-Z 0-9.-]+\.[a-z A-Z]{2,})$/.test(email);
    const isPassWordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameWordValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPassWordValid) return "Password is not valid";
    // if(!isNameWordValid) return "name is not valid";

    return null;

}