import Image from "next/image";
import axios from "axios";

async function getUser(){
  const response =  await axios.get("http://localhost:3000/api/user")
  return response.data ;
}

export default async function Home() {
   
  const userDetails = await getUser();

  return (
    
      <div className="border-[1px] flex flex-col">
        <div>
          <label htmlFor="">Name : </label>
        {userDetails.Name}
        </div>
        <div>
          <label htmlFor="
          ">email : </label>
        {userDetails.email}
        </div>
        
      </div>
  );
}
// https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details