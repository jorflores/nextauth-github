import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <>
      <div>
        {session.status == "authenticated" ? (
          <div>
            <button onClick={signOut}>Cerrar session</button>
            <p>Bienvenido: {session.data.user.name}</p>
            <img src={session.data.user.image} width="50px"></img>
          </div>
        ) : (
          <button onClick={signIn}>Iniciar session</button>
        )}
      </div>
    </>
  );
}
