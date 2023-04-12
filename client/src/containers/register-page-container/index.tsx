import { useFormik } from "formik";
import { registerSchema } from "./validation";
import { Link } from "react-router-dom";

const RegsiterPageContainer = () => {

    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
        onSubmit: async (values, { resetForm }) => {
            console.log(values)
        },
        validationSchema: registerSchema
    });

    return (
        <div className="main-container">
            <h2 className="main-title">Giriş Yap</h2>
            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center gap-y-4 max-w-lg m-auto mt-16">
                <label className="w-full">
                    {formik.errors.userName && formik.touched.userName && <p className="text-red-500 text-sm font-semibold">{formik.errors.userName}</p>}
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.userName} name="userName" type="text" placeholder="Kullanıcı Adı" className={`contact-input ${formik.errors.userName && formik.touched.userName && "dark:border-red-500 border-red-500"}`} />
                </label>
                <label className="w-full">
                    {formik.errors.email && formik.touched.email && <p className="text-red-500 text-sm font-semibold">{formik.errors.email}</p>}
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name="email" type="email" placeholder="E-posta" className={`contact-input ${formik.errors.email && formik.touched.email && "dark:border-red-500 border-red-500"}`} />
                </label>
                <label className="w-full">
                    {formik.errors.password && formik.touched.password && <p className="text-red-500 text-sm font-semibold">{formik.errors.password}</p>}
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name="password" minLength={8} type="password" placeholder="Şifre" className={`contact-input ${formik.errors.password && formik.touched.password && "dark:border-red-500 border-red-500"}`} />
                </label>

                <label className="w-full">
                    {formik.errors.passwordConfirm && formik.touched.passwordConfirm && <p className="text-red-500 text-sm font-semibold">{formik.errors.passwordConfirm}</p>}
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.passwordConfirm} name="passwordConfirm" minLength={8} type="password" placeholder="Şifre Tekrar" className={`contact-input ${formik.errors.passwordConfirm && formik.touched.passwordConfirm && "dark:border-red-500 border-red-500"}`} />
                </label>

                <button type="submit" className="btn bg-primaryRed text-white font-bold w-full justify-center">Giriş Yap</button>
            </form>
            <p className="text-center mt-12 text-darkGrayishBlue dark:text-grayishBlue font-semibold text-sm">Kullanıcı hesabın var mı ? <Link to="/login" className="text-primaryRed hover:underline">Giriş Yap</Link> </p>
        </div>
    )
}

export default RegsiterPageContainer