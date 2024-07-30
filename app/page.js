'use client';
import Image from "next/image";
import {useState, useEffect} from "react";


export default function Home() {

  const [counter, seCounter] = useState(0);
  const [alert, setAlert] = useState(false);

  const HandleClick = async() => {
    seCounter(counter + 1);
  }

  useEffect(() => {
    if(counter >= 10){
      setAlert(true);
    }else{
      setAlert(false);
    }
  }, [counter])



  useEffect(() => {
    datosApi();
    datosApi2();
  }, [])



  const datosApi = async() => {
    const response = await axios(`${process.env.NEXT_PUBLIC_BACKEND}/api/hello`);
    const data = response.data;
    setCounter(data.counter);
    console.log(data);
  }

  const datosapi2 = async() => {
    const response = await axios(`${process.env.NEXT_PUBLIC_BACKEND}/api/hello`);
    const data = response.data;
    console.log(data);
  }

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {process.env.NEXT_PUBLIC_BACKEND}
      <h1 className="text-4xl font-bold">{counter}</h1>
         {/* counter>10 && <h1>Es mayor a 10</h1> */}

         {alert? <h1>Es mayor a 10</h1> : <h1>todavía le falta</h1>}
        <button onClick={HandleClick}> click here</button>

    </main>
  );
}
