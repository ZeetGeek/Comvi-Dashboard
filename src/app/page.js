// dependencies
import Image from "next/image";
import Link from "next/link";

// components
import Layout from "@/layout";
import { AuthenticationBox } from "@/components/global/layout/boxes";
import InputField from "@/components/global/form-fields/inputs";
import Button from "@/components/global/theme-buttons/button";

// images
import GoogleIcon from "@/images/components/sign-and-sign-up/icons/google.svg";
import TwitterIcon from "@/images/components/sign-and-sign-up/icons/twitter.svg";

function SignIn() {
    return (
        <>
            <div className="mx-32">
                <Layout className="h-screen w-full flex items-center justify-center">
                    <AuthenticationBox
                        title="Create an Account"
                        description="Improve business performance with Comvi dashboards">
                        {/* sign in form */}
                        <form className="w-full">
                            {/* name, password and email */}
                            <div>
                                {/* name field */}
                                <InputField
                                    type="text"
                                    label="Name"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                />
                                {/* email field */}
                                <InputField
                                    type="email"
                                    label="Email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                                {/* password field */}
                                <InputField
                                    type="password"
                                    label="Password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>

                            {/* create an account, google and twitter button */}
                            <div className="mt-24 mb-32">
                                {/* create an account button */}
                                <Button
                                    color="primary"
                                    size="extra-large"
                                    className="w-full mb-24">
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
                                    />{" "}
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
                                    />{" "}
                                    Sing Up with Twitter
                                </Button>
                            </div>

                            {/* Already have an Account? */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px]">
                                Already have an Account?{" "}
                                <Link
                                    href="/sign-up"
                                    className="inline-block text-primary font-semibold text-button hover:text-secondary "
                                    title="Sing In">
                                    Sing In
                                </Link>
                            </div>
                        </form>
                    </AuthenticationBox>
                </Layout>
            </div>
        </>
    );
}

export default SignIn;
