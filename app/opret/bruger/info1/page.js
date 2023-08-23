"use client"
import React from 'react';
import { Box } from "@/lib/mui";
import { useAppContext } from '$/OpretData';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/lib/mui';
import Text from '$/InputTextField';

const Info1 = () => {
    const router = useRouter()
    const { data, setData } = useAppContext();
    const { control, handleSubmit } = useForm();

    const onSubmitSignIn = async (e) => {
        console.log(e)
        setData({
            ...data,
            e
        })
        router.push("/opret/bruger/info2");
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
                        name="fornavn"
                        defaultValue={data.fornavn}
                        render={({ field: { onChange } }) =>
                            <Text
                                label='navn'
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
                <Button type='submit' >næste</Button>

            </form>
        </Box>
    );

}
export default Info1;