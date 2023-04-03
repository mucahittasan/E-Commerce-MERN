// Libraries
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useFormik } from 'formik';
// Validation
import { userSchema } from "./validation";
// Service
import { addPersonToContactAsync } from "../../redux/contact/service";
// Type
import { AppDispatch } from "../../redux/store";
// Modal
import ContactInfoModal from "../../modal/infoModal";


const ContactPageContainer = () => {

    const dispatch = useDispatch<AppDispatch>();

    const [activeModal, setActiveModal] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            message: '',
        },
        onSubmit: async (values, { resetForm }) => {
            dispatch(addPersonToContactAsync(values));

            setActiveModal(true);
            resetForm()
            setTimeout(() => {
                setActiveModal(false)
            }, 5000)

        },
        validationSchema: userSchema
    });

    return (
        <div className="main-container">
            <ContactInfoModal activeModal={activeModal} name={formik.values.name} message={"Merhaba, mesajınız alınmıştır. En kısa sürede sizinle iletişime geçilecektir!"} detail={"info"} />
            <h2 className="main-title">İletişim</h2>
            <p className="text-darkGrayishBlue text-sm text-center font-semibold my-6 max-w-xl mx-auto flex flex-col">Merhaba 👋 ben Mücahit, benimle istediğiniz gibi fikir alışverişi, tavsiye, işe alım veya başka konular için iletişim kurabilirsiniz. İsterseniz direkt olarak mail adresime buradan da ulaşabilirsiniz. <a href="mailto: mucahittasan0@gmail.com" className="font-bold text-primaryRed">mucahittasan0@gmail.com</a> </p>
            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center gap-y-4">

                <label className="flex-1 flex flex-col w-1/2">
                    {formik.errors.name && formik.touched.name && <p className="text-red-500 text-sm font-semibold">{formik.errors.name}</p>}
                    <input onBlur={formik.handleBlur} name="name" onChange={formik.handleChange} value={formik.values.name} className={`contact-input ${formik.errors.name && formik.touched.name && "border-red-500"}`} type="text" placeholder="İsim" />
                </label>

                <label className="flex-1 flex flex-col w-1/2">
                    {formik.errors.lastName && formik.touched.lastName && <p className="text-red-500 text-sm font-semibold">{formik.errors.lastName}</p>}
                    <input onBlur={formik.handleBlur} name="lastName" onChange={formik.handleChange} value={formik.values.lastName} className={`contact-input ${formik.errors.name && formik.touched.lastName && "border-red-500"}`} type="text" placeholder="Soy İsim" />

                </label>
                <label className="flex-1 flex flex-col w-1/2">
                    {formik.errors.email && formik.touched.email && <p className="text-red-500 text-sm font-semibold">{formik.errors.email}</p>}
                    <input onBlur={formik.handleBlur} name="email" onChange={formik.handleChange} value={formik.values.email} className={`contact-input ${formik.errors.name && formik.touched.email && "border-red-500"}`} type="email" placeholder="E-Mail" />

                </label>

                <label className="w-1/2">
                    {formik.errors.email && formik.touched.message && <p className="text-red-500 text-sm font-semibold">{formik.errors.message}</p>}
                    <textarea onBlur={formik.handleBlur} name="message" onChange={formik.handleChange} value={formik.values.message} className={`contact-input ${formik.errors.name && formik.touched.message && "border-red-500"} min-h-[200px] max-h-[200px] pt-1`} placeholder="Mesajınız..."></textarea>
                </label>

                <button type="submit" className="btn bg-primaryRed text-white w-1/2 text-center flex justify-center">Gönder</button>
            </form>
        </div>
    )
}

export default ContactPageContainer