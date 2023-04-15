import { useEffect } from "react";
import { useFormik } from "formik";
import { loginSchema } from "./validation";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getAllUserAsync, loginUserAsync } from "../../redux/register/service";
import bcrypt from 'bcrypt'
import { toast } from "react-toastify";

const LoginPageContainer = () => {

    const dispatch = useDispatch<AppDispatch>()
    const error = useSelector((state: RootState) => state.register.error);
    const users = useSelector((state: RootState) => state.register.users);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: "",
        },
        onSubmit: async (values, { resetForm }) => {
            await dispatch(loginUserAsync(values));

            if (localStorage.getItem("user")) {
                toast.success("Giris yapildi!")
            } else {
                toast.warning("Gecersiz sifre veya e-posta!")
            }
        },
        validationSchema: loginSchema
    });

    useEffect(() => {
        dispatch(getAllUserAsync())
    }, [])

    return (
        <div className="main-container">
            <h2 className="main-title">Giriş Yap</h2>
            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center gap-y-4 max-w-lg m-auto mt-16">
                <label className="w-full">
                    {formik.errors.email && formik.touched.email && <p className="text-red-500 text-sm font-semibold">{formik.errors.email}</p>}
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name="email" type="email" placeholder="E-posta" className={`contact-input ${formik.errors.email && formik.touched.email && "dark:border-red-500 border-red-500"}`} />
                </label>
                <label className="w-full">
                    {formik.errors.password && formik.touched.password && <p className="text-red-500 text-sm font-semibold">{formik.errors.password}</p>}
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name="password" minLength={8} type="password" placeholder="Şifre" className={`contact-input ${formik.errors.password && formik.touched.password && "dark:border-red-500 border-red-500"}`} />
                </label>
                <button type="submit" className="btn bg-primaryRed text-white font-bold w-full justify-center">Giriş Yap</button>
            </form>
            <p className="text-center mt-12 text-darkGrayishBlue dark:text-grayishBlue font-semibold text-sm">Kullanıcı hesabın yok mu ? <Link to="/register" className="text-primaryRed hover:underline">Kayıt Ol</Link> </p>
        </div>
    )
}

export default LoginPageContainer