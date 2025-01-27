import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function registerUser(name: string, email: string, phone: string) {
    try {
        console.log("Registering user:", name, email, phone);
        const user = await prisma.userRegistration.create({
            data: {
                name,
                email,
                phone,
            },
        });
        return user;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
