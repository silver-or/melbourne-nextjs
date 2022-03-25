import Link from "next/link";

const AppLayout = () => {
  return (
    <>
        <Link href="/">
        <a>
          <h2>to Home</h2>
        </a>
      </Link>
      <Link href="/counter">
        <a>
          <h2>to counter</h2>
        </a>
      </Link>
      <Link href="/calc">
        <a>
          <h2>to Calc</h2>
        </a>
      </Link>
      <Link href="/bmi">
        <a>
          <h2>to bmi</h2>
        </a>
      </Link>
      <Link href="/grade">
        <a>
          <h2>to grade</h2>
        </a>
      </Link>
      <Link href="/login">
        <a>
          <h2>to login</h2>
        </a>
      </Link>
    </>
  );
};

export default AppLayout;