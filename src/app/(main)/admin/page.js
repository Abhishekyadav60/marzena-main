import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";

export default async function Admin() {
  // const session = await getServerSession();

  // if (!session || session.user.role !== "admin") {
  //   redirect("/dashboard");
  // }

  return <h1 className="text-3xl">Admin Panel</h1>;
}


