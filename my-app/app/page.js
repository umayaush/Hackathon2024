import Link from "next/link";
export default function Page() {
  return (
    <main>
      {/* Title */}
      <h1>
        Welcome to App Name
      </h1>

      {/* Button (has some Tailwind CSS) */}
      <Link href="./dashboard">
        <button className=" bg-rose-400"> 
          Login
        </button>
      </Link>

    </main>
  );
}