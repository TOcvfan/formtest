"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import { useAppContext } from '$/OpretData';
import { Button, Box } from '@/lib/mui'

const Result = () => {
    const router = useRouter()
    const { data } = useAppContext();

    return (
        <Box>
            <h2>Result:</h2>
            <pre>{JSON.stringify(data, null, 3)}</pre>
            <Button type="button" onClick={() => router.push('/tis')}>
                Tis
            </Button>
        </Box>
    );
};

export default Result;