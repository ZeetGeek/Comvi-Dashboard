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
import { signUpSchema } from "@/schemas";

function SignUp() {
    // navigation
    const router = useRouter();

    // form validation
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                password: "",
            },
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                console.log(values);
                action.resetForm();
                toast.success("Sign up successful");
                router.push("/auth/sign-in", { scroll: false });
            },
        });

    return (
        <div className="h-screen w-full flex items-center justify-center px-20">
            <AuthenticationBox
                title="Create an Account"
                description="Improve business performance with Comvi dashboards">
                {/* sign in form */}
                <form className="w-full" onSubmit={handleSubmit}>
                    {/* name, password and email */}
                    <div>
                        {/* name field */}
                        <InputField
                            type="text"
                            label="Name"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                errors.name && touched.name ? errors.name : null
                            }
                        />
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

                    {/* create an account, google and twitter button */}
                    <div className="mt-24 mb-32">
                        {/* create an account button */}
                        <Button
                            color="primary"
                            size="extra-large"
                            className="w-full mb-24"
                            type="submit">
                            Create an Account
                        </Button>

                        {/* google button */}
                        <Button
                            size="extra-large"
                            className="w-full mb-24 flex items-center justify-center gap-10 text-semibold text-dark text-button">
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

                    {/* Already have an Account? */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px] dark:text-neutral-400">
                        Already have an Account?
                        <Link
                            href="/auth/sign-in"
                            className="inline-block text-primary dark:text-primary-light dark:hover:text-primary-light/80 duration-300 font-semibold text-button hover:text-secondary  "
                            title="Sing In">
                            Sing In
                        </Link>
                    </div>
                </form>
            </AuthenticationBox>
        </div>
    );
}

export default SignUp;
