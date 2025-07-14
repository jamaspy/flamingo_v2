import { Suspense } from "react";
import { Login } from "@/components/complex";

export default function SignUpPage() {
  return (
    <Suspense>
      <main className="flex-1 flex flex-row">
        <div className="flex-1">
          <Login mode="signup" />
        </div>
        <div className="flex-1 min-h-screen bg-[url('/hero.png')] bg-cover bg-center hidden md:block" />
      </main>
    </Suspense>
  );
}
