import { PrismaClient } from '@prisma/Client'; 

declare global {
    var client: PrismaClient | undefined; 
}

const prisma = globalThis.client || new PrismaClient(); 

if(process.env.NODE_ENV === "production") globalThis.client = prisma; 

export default prisma; 
