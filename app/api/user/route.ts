import { NextRequest } from "next/server"
import { Prisma, PrismaClient } from '@prisma/client'
const client = new PrismaClient();

export function GET(){
    //database logic


    return Response.json({
        email: "mohak@gmail.com",
        Name :  "mohak"
    })
}

export async function POST(req : NextRequest){
    //database logic
    const body = await req.json()

    client.user.create({
        data : {
            email : body.email ,
            password : body.password
        }
    })

    console.log(body)


    return Response.json({
     message : "logged in"
    })
}

export function PUT(){
    //database logic


    return Response.json({
        email: "mohak@gmail.com",
        Name :  "mohak"
    })
}

// for that req thing it does provide a prop.
//postgres://avnadmin:AVNS_nb3UpcmQ@pg-2fbc1a27-test-nextjs:25813/defaultdb?sslmode=require