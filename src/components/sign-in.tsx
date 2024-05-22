import MyInput from "@/components/common/MyInput";
import {MyButton} from "@/components/common/MyButton";
import {AuthError} from "next-auth";
import {signIn} from "@/auth";

export const SignIn = async () => {

  return (
    <form
      className="flex flex-col items-center w-full"
      action={async (formData) => {
        "use server"
        try {
          const username = formData.get('username');
          const password = formData.get('password');
          await signIn('credentials', {username, password, redirectTo: '/repertoire'})
        } catch (error) {
          if (error instanceof AuthError) {
            switch (error.type) {
              case 'CredentialsSignin':
                return "Invalid credentials";
              default:
                return "Something went wrong"
            }
          }
          throw error
        }
      }}
    >
      <MyInput
        name="username"
        placeholder={'Nazwa użytkownika'}
        type={"text"}
        required={true}
      />
      <MyInput
        name="password"
        placeholder={'Hasło'}
        type={"password"}
        required={true}
      />
      <MyButton
        className="px-4 py-2 font-medium"
        type={'submit'}
      >
        <p className="group-hover:text-red-700 group-hover:font-bold font-medium duration-100">Zaloguj się</p>
      </MyButton>
    </form>
  )
}