// app/dashboard/page.jsx

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import DashboardPageClient from "./DashboardClient";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to login if not authenticated
    return (
      <div className="p-6 text-center text-red-500">
        <p>Access denied. Please <a className="text-blue-500 underline" href="/login">login</a>.</p>
      </div>
    );
  }

  return <DashboardPageClient />;
}
