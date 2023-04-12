import * as yup from "yup";

export const registerSchema = yup.object().shape({
    userName: yup.string().required("Zorunlu alan!"),
    email: yup.string().email("Geçerli bir email girin.").required("Zorunlu alan!"),
    password: yup.string().min(8).required("Zorunlu alan!"),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Şifreler uyuşmuyor!').required("Zorunlu alan!")
})