import { Suspense } from "react";
import { Login } from "@/components/complex/forms/login-form";

export default function SignInPage() {
  return (
    <Suspense>
      <main className="flex-1 flex flex-row">
        <div className="flex-1">
          <Login mode="signin" />
        </div>
        <div className="flex-1 min-h-screen bg-[url('/hero.png')] bg-cover bg-center hidden md:block" />
      </main>
    </Suspense>
  );
}
