"use server"

import { Prisma, PrismaClient } from '@prisma/client'
const client = new PrismaClient();

export default async function signup( email : string , password: string) {
 

  const createUser = await client.user.create({
        data : {
            email : email ,
            password : password
        }
    })

    if(createUser) {
        return true
        console.log("created")
    } else{
        return false
    }

}

