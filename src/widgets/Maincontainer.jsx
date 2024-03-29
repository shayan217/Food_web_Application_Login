import React from 'react'
import Myinputfield from './Myinputfield'
import Myloginbutton from './Myloginbutton'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Mybackgroundimage from './Mybackgroundimage';
const Maincontainer = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Must Enter Email").email("invalid email format"),
            password: Yup.string().required("Must enter Password").max(12, "max length is 12").min(4, "min length is 4")
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });
    return (
        <>
            <div class="login">
                <Mybackgroundimage />

                <form action="" class="login__form" onSubmit={formik.handleSubmit}>
                    <h1 class="login__title">Login</h1>

                    <div class="login__inputs">
                        <div class="login__box">
                            <Myinputfield
                                myplaceholder={"Enter Email"}
                                mytype={"email"}
                                myname={"email"}
                                myonchnage={formik.handleChange}
                                myonblur={formik.handleBlur}
                                myvalues={formik.values.email}
                            />

                            <i class="ri-mail-fill"></i>
                        </div>
                        {formik.touched.email && !formik.errors.email ? (
                            <div className="success">your email is done</div>
                        ) : null}
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error">{formik.errors.email}</div>
                        ) : null}
                        <div class="login__box">
                            <Myinputfield
                                myplaceholder={"Enter Password"}
                                mytype={"password"}
                                myname={"password"}
                                myonchnage={formik.handleChange}
                                myonblur={formik.handleBlur}
                                myvalues={formik.values.password}
                            />

                            <i class="ri-mail-fill"></i>
                        </div>
                        {formik.touched.password && !formik.errors.password ? (
                            <div className="success">your password is done</div>
                        ) : null}
                        {formik.touched.password && formik.errors.password ? (
                            <div className="error">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div class="login__check">
                        <div class="login__check-box">
                            <input type="checkbox" class="login__check-input" id="user-check" />
                            <label for="user-check" class="login__check-label">Remember me</label>
                        </div>

                        <a href="#" class="login__forgot">Forgot Password?</a>
                    </div>

                    <Myloginbutton mytext={"Login"} />
                    <div class="login__register">
                        Don't have an account? <a href="#">Register</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Maincontainer
