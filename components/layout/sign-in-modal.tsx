"use client";

import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";

import { siteConfig } from "@/config/site";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { Modal } from "@/components/shared/modal";

import { UserAuthForm } from "../forms/user-auth-form";

export const SignInModal = () => {
  const signInModal = useSigninModal();

  return (
    <Modal showModal={signInModal.isOpen} setShowModal={signInModal.onClose}>
      <SignInModalForm onClose={signInModal.onClose} />
    </Modal>
  );
};

function SignInModalForm({ onClose }: { onClose?: () => void }) {
  const [signInClicked, setSignInClicked] = useState(false);
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center space-y-3 border-b bg-background px-4 py-6 pt-8 text-center md:px-16">
        <a href={siteConfig.url}>
          <Icons.logo className="size-10" />
        </a>
        <h3 className="font-urban text-2xl font-bold">Sign In</h3>
        <p className="text-sm text-gray-500">
          This is strictly for demo purposes - only your email and profile
          picture will be stored.
        </p>
      </div>

      <div className="flex flex-col space-y-4 px-4 py-8 md:px-16">
        <Suspense>
          <UserAuthForm />
        </Suspense>
      </div>
    </div>
  );
}
