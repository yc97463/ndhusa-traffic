import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to "/landing" when the component mounts
    router.push("/landing");
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return <></>; // You can return any JSX here if needed
}
