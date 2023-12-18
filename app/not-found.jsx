import React from "react";
import Link from "next/link";

const NotFound404 = () => {
  return (
    <div className="flex gap-8 flex-col items-center justify-center py-64">
      <img
        src="/icons/website/emotion-sad.svg"
        alt="emotion sad icon"
        height="64"
        width="64"
      />
      <h1 className="font-bold text-8xl">404</h1>
      <h2 className="text-2xl font-bold">Unfortunately, page not found :(</h2>
      <Link href="/">
        <button className="btn-primary">Take Me Home</button>
      </Link>
    </div>
  );
};

export default NotFound404;
