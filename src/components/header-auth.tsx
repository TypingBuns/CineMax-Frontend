import {Session} from "next-auth";
import Link from "next/link";
import {IoPerson} from "react-icons/io5";
import {signOut} from "@/auth";


export default async function HeaderAuth({ session }: { session: Session | null }) {

  if (session?.user) {
    return (

      <form
        className='navbar-right'
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit" >Wyloguj</button>
      </form>
    )
  }

  return (
    <>
      <Link className='navbar-right flex items-center' href="/login"><IoPerson/><p>&nbsp;Login</p></Link>
      <Link className='navbar-right' href="/register"><p>Rejestracja</p></Link>
    </>
  )
}