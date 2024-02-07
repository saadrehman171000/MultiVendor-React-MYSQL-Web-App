import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

type Props = {};

async function Dashboard({}: Props) {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  if (!isAuthenticated) {
    redirect("/api/auth/login");
  }

  const isMerchant = await getPermission("user:merchant");
  if (!isMerchant?.isGranted) {
    redirect("/");
  }
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="text-9xl font-bold h-[800px] flex items-center justify-center">
        <h1>Vendors View</h1>
      </div>
    </main>
  );
}

export default Dashboard;
