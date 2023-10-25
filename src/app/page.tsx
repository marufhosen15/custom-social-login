import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log(process.env.GITHUB_CLIENT_ID);

  return (
    <div>
      <h1>SOCIAL LOGIN</h1>
      <Link
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`}
      >
        LOG
      </Link>
    </div>
  );
}
