
import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";
import { TextArea } from "../components/ui/TextArea";
import { Select } from "../components/ui/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";



type FormData = {
    email: string;
    nama: string;
    password: string;
    password_confirm: string;
    bio: string;
    event: string;
}

const schema = z.object({
    nama: z.string().min(1, "nama harus diisi"),
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password harus diisi"),
    password_confirm: z.string().min(8, "Password harus diisi"),
    bio: z.string().min(1, "Bio Harus diisi!"),
    event: z.string().min(1, "Event Harus diisi!"),
})

export default function RegisterEvent(){
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
            <div className="flex justify-center items-center font-bold text-2xl">
                <h2>Daftar Event</h2>
            </div>

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

                <TextArea 
                    label="Bio"
                    name="bio"
                    register={register}
                    error={errors.bio?.message}
                />

                <Select
                    label="Event"
                    name="event"
                    register={register}
                    error={errors.event?.message}
                    options={[
                        { label: "Lomba Hi-Res", value: "Lomba Hi-Res" },
                        { label: "Lomba Modif Knalpot", value: "Lomba Modif Knalpot" },
                    ]}
                />

                <div>
                    <Button type="submit" label="Daftar"/>
                </div>
            </form>
        </div>
    );
};

