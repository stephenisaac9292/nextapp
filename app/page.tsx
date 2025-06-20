import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/Products";

export default function Home() {
  return (
<main>
  <h1><b>Hello Nigga</b></h1>
  <Link href="/users">users</Link>
  < ProductCard/>
</main>
  );
}

