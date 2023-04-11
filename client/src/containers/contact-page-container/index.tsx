// Libraries
import { useDispatch } from "react-redux"
import { useFormik } from 'formik';
// Validation
import { userSchema } from "./validation";
// Service
import { addPersonToContactAsync } from "../../redux/contact/service";
// Type
import { AppDispatch } from "../../redux/store";
import { toast } from "react-toastify";


const ContactPageContainer = () => {

    const dispatch = useDispatch<AppDispatch>();

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            message: '',
        },
        onSubmit: async (values, { resetForm }) => {
            dispatch(addPersonToContactAsync(values));
            toast.info(`Merhaba ${values.name}, mesajınız alınmıştır ve en kısa sürede sizinle iletişime geçilecektir.`)
            resetForm()
        },
        validationSchema: userSchema
    });

    return (
        <div className="main-container">
            <h2 className="main-title">İletişim</h2>
            <p className="text-darkGrayishBlue dark:text-grayishBlue text-sm text-center font-semibold my-6 max-w-xl mx-auto flex flex-col">Merhaba 👋 ben Mücahit, benimle istediğiniz gibi fikir alışverişi, tavsiye, işe alım veya başka konular için iletişim kurabilirsiniz. Direkt olarak mail adresimden de iletişim kurabilirsiniz. <a href="mailto: mucahittasan0@gmail.com" className="font-bold text-primaryRed">mucahittasan0@gmail.com</a> </p>
            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center gap-y-4">

                <label className="flex-1 flex flex-col md:w-1/2 w-full">
                    {formik.errors.name && formik.touched.name && <p className="text-red-500 text-sm font-semibold">{formik.errors.name}</p>}
                    <input onBlur={formik.handleBlur} name="name" onChange={formik.handleChange} value={formik.values.name} className={`contact-input ${formik.errors.name && formik.touched.name && "dark:border-red-500 border-red-500"}`} type="text" placeholder="İsim" />
                </label>

                <label className="flex-1 flex flex-col md:w-1/2 w-full">
                    {formik.errors.lastName && formik.touched.lastName && <p className="text-red-500 text-sm font-semibold">{formik.errors.lastName}</p>}
                    <input onBlur={formik.handleBlur} name="lastName" onChange={formik.handleChange} value={formik.values.lastName} className={`contact-input ${formik.errors.name && formik.touched.lastName && "dark:border-red-500 border-red-500"}`} type="text" placeholder="Soy İsim" />

                </label>
                <label className="flex-1 flex flex-col md:w-1/2 w-full">
                    {formik.errors.email && formik.touched.email && <p className="text-red-500 text-sm font-semibold">{formik.errors.email}</p>}
                    <input onBlur={formik.handleBlur} name="email" onChange={formik.handleChange} value={formik.values.email} className={`contact-input ${formik.errors.name && formik.touched.email && "dark:border-red-500 border-red-500"}`} type="email" placeholder="E-Mail" />

                </label>

                <label className="md:w-1/2 w-full">
                    {formik.errors.email && formik.touched.message && <p className="text-red-500 text-sm font-semibold">{formik.errors.message}</p>}
                    <textarea onBlur={formik.handleBlur} name="message" onChange={formik.handleChange} value={formik.values.message} className={`contact-input ${formik.errors.name && formik.touched.message && "dark:border-red-500 border-red-500"} min-h-[200px] max-h-[200px] pt-1`} placeholder="Mesajınız..."></textarea>
                </label>

                <button type="submit" className="btn bg-primaryRed text-white md:w-1/2 w-full text-center flex justify-center hover:shadow-[0_0_10px_2px_rgba(255,26,72,.75)]">Gönder</button>
            </form>
        </div>
    )
}

export default ContactPageContainer