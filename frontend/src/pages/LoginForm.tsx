
// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


type FormData = {
    email: string;
    password: string;
}

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password harus diisi"),
})

export default function LoginForm(){
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);
    const { 
        register, 
        handleSubmit, 
        formState: { errors }
     } = useForm<FormData>({
        resolver: zodResolver(schema)
     });
 
    
     
    
    const onSubmit = (data: FormData) => {
        console.log(data);
        if(data.email == "24090096" && data.password == "24090096" ){
            alert("Login berhasil");

            login(data.email)

            navigate("/dashboard");
        }else{
            alert("Email & Password salah");
        }
        
        
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label="Email"
                    nama="email"
                    register={register}
                    error={errors.email?.message}
                />

                <InputPassword
                    label="Password"
                    nama="password"
                    register={register}
                    error={errors.password?.message} 
                />

                <div>
                    
                        <Button type="submit" label="Login" />
                    

                </div>

                <div className="mt-5">
                    Belum punya Akun? <Link to="/register" className="text-red-600">Daftar Disini</Link>
                </div>
            </form>
        </div>
    );
};

