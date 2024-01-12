import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>The requested resource could not be found.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
