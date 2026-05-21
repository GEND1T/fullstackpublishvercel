
// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";


type FormData = {
    email: string;
    nama: string;
    password: string;
    password_confirm: string;
}

const schema = z.object({
    nama: z.string().min(1, "nama harus diisi"),
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password harus diisi"),
    password_confirm: z.string().min(8, "Password harus diisi")
})

export default function RegisterForm(){
     const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm<FormData>({
       resolver : zodResolver(schema)

    });
 
    
    
    const onSubmit = (data: FormData) => {
        console.log(data);
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <InputText
                    label="Nama"
                    nama="nama"
                    register={register}
                    error={errors.nama?.message}
                />
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
                <InputPassword
                    label="Password_confirm"
                    nama="password_confirm"
                    register={register}
                    error={errors.password_confirm?.message} 
                />

                <div>
                    <Button label="Register" variant="primary"/>
                </div>
            </form>
        </div>
    );
};

