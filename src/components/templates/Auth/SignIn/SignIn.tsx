import { useState } from "react";
import { Formik } from "formik";
import { LoginDTO } from "../../../../types/auth";
import { useLogin } from "@services/auth..services";
import { showError, showSuccess } from "@utils/Toasts";

function SignIn() {
  const [showPwd, setShowPwd] = useState(false);
  const login = useLogin();
  return (
    <div className="min-h-screen pt-24 pb-32 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 text-primary font-mono text-lg mb-6">
          <span className="animate-pulse">●</span>
          <span className="uppercase tracking-[0.3em]">
            Secure_Shell / Auth
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-monoBold tracking-tighter mb-2">
          Login
        </h1>
        <p className="font-mono text-[14px] text-accent mb-8">
          {`> authenticate to access the terminal. `}
        </p>
        <Formik<LoginDTO>
          initialValues={{ email: "", password: "" }}
          onSubmit={(values: LoginDTO) => {
            login.mutate(values ,{
                onSuccess:()=>{
                    showSuccess('Login successfully')
                },
                onError:(error)=>{
                    showError(error.message)
                }
            })
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form
              onSubmit={handleSubmit}
              className="border border-input divide-y divide-input"
            >
              <div className="p-4">
                <label
                  htmlFor="#"
                  className="block font-mono text-[12px] uppercase tracking-widest text-foreground mb-4"
                >
                  // email
                </label>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-primary">$</span>
                  <input
                    type="email"
                    name="email"
                    className=" flex-1 bg-transparent border-none outline-none font-mono placeholder:text-foreground/50"
                    placeholder="root"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="p-4">
                <label
                  htmlFor="#"
                  className="block font-mono text-[12px] uppercase tracking-widest text-foreground mb-4"
                >
                  // password
                </label>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-primary">$</span>
                  <input
                    type={showPwd ? "text" : "password"}
                    name="password"
                    className=" flex-1 bg-transparent border-none outline-none font-mono placeholder:text-foreground/50"
                    placeholder="*********"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    className="font-mono text-[12px] uppercase cursor-pointer tracking-widest text-foreground hover:text-primary"
                  >
                    {showPwd ? "hide" : "show"}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-5 p-4 bg-primary cursor-pointer text-foreground font-mono text-lg uppercase tracking-[0.3em] hover:opacity-60 transition-opacity disabled:opacity-50"
              >
                {`// enter`}
              </button>
            </form>
          )}
        </Formik>
        <p className="font-mono text-[12px] text-accent mt-6 text-center">
          {`> verified. for admin`}
        </p>
      </div>
    </div>
  );
}

export default SignIn;
