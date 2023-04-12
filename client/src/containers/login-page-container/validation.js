import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email("Geçerli bir email girin.").required("Zorunlu alan!"),
    password: yup.string().min(8).required("Zorunlu alan!")
})