"use client";

// dependencies
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// components
import { AuthenticationBox } from "@/components/global/layout/boxes";
import InputField from "@/components/global/form-fields/inputs";
import Button from "@/components/global/theme-buttons/button";

// images
import GoogleIcon from "@/images/components/sign-and-sign-up/icons/google.svg";
import TwitterIcon from "@/images/components/sign-and-sign-up/icons/twitter.svg";

// form validations
import { signInSchema } from "@/schemas";

function SignIn() {

    // navigation
    const router = useRouter();

    // form validation
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            validationSchema: signInSchema,
            onSubmit: (values, action) => {
                console.log(values);
                action.resetForm();
                toast.success("Login successful");
                router.push("/", { scroll: false });
            },
        });

    return (
        <>
            <div className="h-screen w-full flex items-center justify-center px-20">
                <AuthenticationBox
                    title="Sing In"
                    description="Improve business performance with Comvi dashboards">
                    {/* sign in form */}
                    <form className="w-full" onSubmit={handleSubmit}>
                        {/* email and email */}
                        <div>
                            {/* email field */}
                            <InputField
                                type="email"
                                label="Email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                    errors.email && touched.email
                                        ? errors.email
                                        : null
                                }
                            />
                            {/* password field */}
                            <InputField
                                type="password"
                                label="Password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                    errors.password && touched.password
                                        ? errors.password
                                        : null
                                }
                            />
                        </div>

                        {/* sign in, google and twitter button */}
                        <div className="mt-24 mb-32">
                            {/* sign in button */}
                            <Button
                                color="primary"
                                size="extra-large"
                                className="w-full mb-24 "
                                type="submit">
                                Sing In
                            </Button>

                            {/* google button */}
                            <Button
                                size="extra-large"
                                className="w-full mb-24 flex items-center justify-center gap-10 text-semibold text-dark text-button ">
                                <Image
                                    src={GoogleIcon}
                                    height={20}
                                    width={20}
                                    alt="Google Icon"
                                />
                                Sing Up with Google
                            </Button>

                            {/* twitter button */}
                            <Button
                                size="extra-large"
                                className="w-full mb-24 flex items-center justify-center gap-10 text-semibold text-dark text-button">
                                <Image
                                    src={TwitterIcon}
                                    height={20}
                                    width={20}
                                    alt="Twitter Icon"
                                />
                                Sing Up with Twitter
                            </Button>
                        </div>

                        {/* Don't have an Account? */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px] dark:text-neutral-400">
                            Don&apos;t have an Account?
                            <Link
                                href="/auth/sign-up"
                                className="inline-block text-primary dark:text-primary-light dark:hover:text-primary-light/80 duration-300 font-semibold text-button hover:text-secondary "
                                title="Sing In">
                                Sing Up
                            </Link>
                        </div>
                    </form>
                </AuthenticationBox>
            </div>
        </>
    );
}

export default SignIn;
