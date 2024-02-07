import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

type Props = {};

async function AdminDashboard({}: Props) {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  if (!isAuthenticated) {
    redirect("/api/auth/login");
  }

  const isAdmin = await getPermission("user:admin");
  if (!isAdmin?.isGranted) {
    redirect("/");
  }
  return <main className="flex flex-col justify-between"></main>;
}

export default AdminDashboard;
