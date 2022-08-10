import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import axios from 'axios';



const CreateBusines=()=>
{

    const[topic,setTopic]=useState("")
    const [objName,setObjName]=useState("")
    const [uid,setUid]=useState("")
    const [description,setDescription]=useState("")
    const [phone,setPhone]=useState("")

    const handleSubmit=async() => { 
        const newBusiness=
        {
            topic,
            objName,
            uid,
            description,
            phone
        }
            try {
                const resp = await axios.post('http://localhost:3333/user/???',newBusiness);
                console.log(resp.data);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
    


    return(
        <div>
            <Stack spacing={3}>
                <Input placeholder='topic' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTopic(e.target.value)}></Input>
                <Input placeholder='object name' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setObjName(e.target.value)}></Input> 
                <Input placeholder='manager uid' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUid(e.target.value)}></Input> 
                <Input placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}></Input> 
                <InputGroup>
                    <InputLeftElement
                    pointerEvents='none'
                    children={<PhoneIcon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Phone number' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}></Input> 
                </InputGroup>
                <Button colorScheme='red' onClick={handleSubmit}>SUBMIT</Button>
            </Stack>
           
        </div>
    )
    } 
   
export default CreateBusines;