import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required("Zorunlu alan!"),
    lastName: yup.string().required("Zorunlu alan!"),
    email: yup.string().email("Geçerli bir email girin.").required("Zorunlu alan!"),
    message: yup.string().max(100, "Mesajınız en fazla 100 kelimelik olabilir.").required("Zorunlu alan!")
})