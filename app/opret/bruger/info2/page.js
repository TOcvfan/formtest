"use client"
import React from 'react';
import { Box } from "@/lib/mui";
import { useAppContext } from '$/OpretData';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/lib/mui';
import Text from '$/InputTextField';

const Info2 = () => {
    const router = useRouter()
    const { data, setData } = useAppContext();
    const { control, handleSubmit } = useForm();

    const onSubmitSignIn = async (e) => {
        console.log(e.target)
        setData({
            ...data,
            e
        })
        router.push("/opret/bruger/result");
    }


    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmitSignIn)}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    mt: 2
                }}>
                    <Controller
                        control={control}
                        name="ostepops"
                        defaultValue={data.ostepops}
                        render={({ field: { onChange } }) =>
                            <Text
                                label='ostepops'
                                onChange={onChange}
                                type="text"
                            />
                        }
                        rules={{ required: false }}
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Button type='submit' >slut</Button>

            </form>
        </Box>
    );

}
export default Info2;