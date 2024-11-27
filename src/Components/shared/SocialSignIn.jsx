'use client'
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialSignIn = () => {
    const router = useRouter();
    const session = useSession();
    const searchParams = useSearchParams();
    const path = searchParams.get('redirect');

    const handleSocialLogin = (provider) => {
        const resp = signIn(provider, { redirect: true , callbackUrl: path ? path : '/'});
    }
    if (session.status === 'authenticated') {
        router.push('/')
    }

    return (
        <div className="flex justify-center space-x-4 *:border hover:*:bg-[--primary]">
            <button onClick={() => handleSocialLogin('google')} className="rounded-full p-3">
                <FaGoogle />
            </button>
            <button onClick={() => handleSocialLogin('github')} className="rounded-full p-3">
                <FaGithub />
            </button>
        </div>
    );
};

export default SocialSignIn;