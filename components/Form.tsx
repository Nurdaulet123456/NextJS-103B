import { Formik, Field, Form as Forms, ErrorMessage } from "formik"
import * as Yup from 'yup'

const loginSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required()
})

const Form = () => {
    return (
        <>
            <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={loginSchema}
            onSubmit={(value) => {
                console.log(value.email)
            }}
            >
            {() => {
                return (
                    <Forms>

                       <div>
                       <Field type="email" name="email" placeholder="Your Email"/>
                        <div>
                        <ErrorMessage name="email"/>
                        </div>
                       </div>
                       <div>
                       <Field type="password" name="password" placeholder="Your Password"/>
                        <div>
                        <ErrorMessage name="password"/>
                        </div>
                       </div>
                       <div>
                       <button type="submit">Click</button>
                       </div>
                    </Forms>
                )
            }}
            </Formik>
        </>
    )
}

export default Form