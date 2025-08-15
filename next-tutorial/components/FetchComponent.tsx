import React from 'react';
import prisma from "@/utils/db/index"


interface UserData {
  id: number;
  username: string;
  password: string;
}

async function getUserDetails(): Promise<UserData[]> {
    try {
      const userData = await prisma.user.findMany({});
      if (!userData) {
        return [];
      }
      return userData as UserData[];
    } catch (error) {
      return [];
    }
}

async function FetchComponent() {
    const users : UserData[] = await getUserDetails();
  return (
    <div>
      {users && users.map((user : UserData) => (
            <div key={user.id} className="p-4 border rounded mb-4">
                <h2 className="text-xl font-bold">{user?.username}</h2>
                <h2 className="text-xl font-bold">{user?.password}</h2>
            </div>
      ))}

    </div>
  )
}

export default FetchComponent