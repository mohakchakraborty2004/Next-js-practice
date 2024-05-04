"use client"

import signup from "@/app/actions/user";
import axios from "axios";
import { useState } from "react"


export function SignupComponent() {
 
   const [email , setEmail] = useState("");
   const [password, setPassword] = useState("");

   console.log(email);
   console.log(password);


    return <div className="flex justify-center items-center">
<div className="border flex flex-col  justify-center items-center p-6 bg-slate-400">
<div className="flex flex-col">
            <label htmlFor="" className="mb-1">email</label>
            <input type="text" className="border-[2px] p-1 mb-4 max-w-[300px]" onChange={(e) => {
               setEmail(e.target.value); 
            }} />
        </div>

        <div className="flex flex-col">
            <label htmlFor="" className="mb-1">Password</label>
            <input type="text" className="border-[2px] p-1  max-w-[300px]" onChange={(e) => {
               setPassword(e.target.value); }}/>
        </div>

        <div>
            <button className="bg-black font-semibold p-3 text-white rounded-2xl mt-3"
            onClick={async()=> {
                 const response = await signup(email, password )
                 console.log(response)
            }}
            >Signup</button>
        </div>
</div>



    </div>
}