"use server";

import prisma from "@/utils/db/index"

export async function userSignin(username: string, password: string) {
    try {
        const createUser = await prisma.user.create({
            data : {
            username : username,
            password : password,
        }
    });
     console.log(createUser.id);
    return createUser;
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return String(error);
    }
}