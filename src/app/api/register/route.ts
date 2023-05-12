import { NextResponse }  from 'next/server'; 
import prisma from '@/libs/prismaDB';
import bcrypt from 'bcrypt'; 

export async function POST(request: Request) {
    try {
        const body = await request.json(); 

        const { 
            username,
            email,
            password
        } = body; 

        
        const genSalt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, genSalt); 

        const user = await prisma.user.create({
            data: {
                username,
                email,
                hashedPassword,
            }
        })

        return NextResponse.json(user, {
            status: 200,
        }); 

        




    } catch(error: any){
        console.log(error)
        return new NextResponse("Internal Error", {
            status: 500
        })

    }
    
}