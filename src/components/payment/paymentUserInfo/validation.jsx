import * as yup from "yup";

export const paymentInfo = yup.object().shape({
    name: yup.string().required("Zorunlu alan!"),
    lastName: yup.string().required("Zorunlu alan!"),
    email: yup.string().email("Geçerli bir email girin.").required("Zorunlu alan!"),
    message: yup.string().max(100, "Mesajınız en fazla 100 kelimelik olabilir.").required("Zorunlu alan!"),
    cardNumber: yup.string().max(16).required("Zorunlu alan!"),
    cardOwnerName: yup.string().required("Zorunlu alan!"),
    expirationDateMonth: yup.number().required("Zorunlu alan!"),
    expirationDateYear: yup.number().required("Zorunlu alan!"),
    cvv: yup.number().required("Zorunlu alan!")
})