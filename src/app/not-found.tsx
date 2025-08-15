import Link from "next/link";

export default function NotFound() {
  return (
    <div className="v-screen h-screen text-center mt-[30vh]">
      <p>
        Sorry, that page does not exist.
        <br />
        <Link href="/">Return home?</Link>
      </p>
    </div>
  );
}
