import { userAPI } from "APIs";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { SignInRequest } from "models";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Breadcrumb from "../global/breadcrumbs/breadcrumb";

import { loginSchema } from "../global/schemas/loginSchema";

const Signin = () => {

  const providers = ["google", "facebook"]

  function handleSignin(data: SignInRequest) {
    console.log(data);
    //  const res = userAPI.signIn(data);
    //  console.log(res);
  }
  
  const handleGoogleSignIn = (provider: any) => () => {
    signIn(provider, { callbackUrl: 'http://localhost:3002/home' });
  };
    return (
        <>
            <Breadcrumb
                title="Account"
                pathArray={["Home", "Account"]}
                linkArray={["/home", "/account/sign-in"]}
            />
            <div className="flex flex-wrap justify-center">
                <div
                    className="flex flex-col my-20 py-7 mx-3"
                    style={{
                        width: " 35rem ",
                        height: "auto",
                        background: "#f3f3f3",
                    }}
                >
                    <h2 className="text-3xl mx-3 text-center text-gray-800">
                        Login
                    </h2>
                    <p className="text-center mt-2 mb-6 text-gray-500 mx-5">
                        Please login using account detail below.
                    </p>
                    <div className="m-5 sm:m-5 my-3 md:mx-10 lg:mx-10 xl:mx-10">
                        <Formik
                            initialValues={{
                                username: "",
                                password: "",
                            }}
                            onSubmit={(values, actions) => {
                                const data = {
                                    username: values.username,
                                    password: values.password,
                                };
                                handleSignin(data);
                                actions.setSubmitting(false);
                            }}
                            validationSchema={loginSchema}
                        >
                            {(formikprops) => {
                                return (
                                    <Form onSubmit={formikprops.handleSubmit}>
                                        <div className="mb-4">
                                            <Field
                                                type="text"
                                                className="w-full p-2 placeholder-gray-600 outline-0"
                                                id="username"
                                                name="username"
                                                placeholder="Email or phone number"
                                            />
                                            <div className="errMsg text-red-600 outline-0">
                                                <ErrorMessage name="username" />
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <Field
                                                type="password"
                                                className="w-full p-2 placeholder-gray-600 outline-0"
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <div className="errMsg text-red-600">
                                                <ErrorMessage name="password" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap justify-end sm:justify-end md:justify-between lg:justify-between xl:justify-between">
                                            <button
                                                type="submit"
                                                className="rounded py-2 my-2 w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 bg-green-600/100 hover:bg-black text-white"
                                            >
                                                Sign In
                                            </button>

                                            <div className="my-0 sm:my-0 md:my-3 lg:my-3 xl:my-3 text-decoration-none">
                                                <Link href="/account/forgot-password">
                                                    <a className="text-decoration-none text-gray-600 hover:text-gray-500 font-weight-light">
                                                        Forgot your password?
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                        <div className="flex flex-wrap justify-between">
                            <div className="text-decoration-none mt-3">
                                <Link
                                    data-testid="create-account-link"
                                    href="/account/sign-up"
                                >
                                    <a
                                        data-testid="create-account-page"
                                        className="text-decoration-none text-gray-600 hover:text-gray-500 font-weight-light"
                                    >
                                        Create account
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <span className="mr-1">Sign in with</span>
                                <button
                                    onClick={handleGoogleSignIn(providers[0])}
                                    className="rounded p-2 my-2 bg-green-600/100 hover:bg-black text-white"
                                >
                                    Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;
