"use client"
import React, { useState } from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from '@/app/lib/schema'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Switch } from './ui/switch'


const CreateAccountDrawer = ({children}) => {
    const [open,setOpen] = useState(false);
    const {
  register,
  handleSubmit,
  formState: { errors },
  setValue,
  watch,
  reset,
} = useForm({
  resolver: zodResolver(accountSchema),
  defaultValues: {
    name: "",
    type: "CURRENT",
    balance: "",
    isDefault: false,
  },
});

  return (
    <Drawer open={open} onOpenChange={setOpen}>
  <DrawerTrigger asChild>
   {children}
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle className="text-left">Create New Account</DrawerTitle>
     
    </DrawerHeader>
    <div className='px-4 pb-4'>
<form className='space-y-4'>
<div className='space-y-2'>
    <label htmlFor="name" className='text-sm font-medium'>Account Name</label>
    <Input id="name" placeholder="e.g.., Main Checking" {...register("name")} />
    {errors.name && (
        <p className='text-sm text-red-500'>{errors.name.message}</p>
    )}
</div>
<div className='space-y-2'>
    <label htmlFor="name" className='text-sm font-medium'>Account Type</label>
    <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="CURRENT">current</SelectItem>
    <SelectItem value="SAVING">savings</SelectItem>
  </SelectContent>
</Select>
    {errors.type && (
        <p className='text-sm text-red-500'>{errors.type.message}</p>
    )}
</div>
    
<div className='space-y-2'>
    <label htmlFor="balance" className='text-sm font-medium'>Initial Balance</label>
    <Input id="balance" type="number" step="0.01" placeholder="0.00" {...register("balance")} />
    {errors.balance && (
        <p className='text-sm text-red-500'>{errors.balance.message}</p>
    )}
</div>
<div className='space-y-2'>
    <label htmlFor="isDefault" className='text-sm font-medium'>Set as Default</label>
<p>This account will be selected by default for transactions</p>
<Switch
id="isDefault"
onCheckedChange={(checked)=>setValue("isDefault",checked)}
checked={watch("isDefault")}
/>
</div>
   </form>
    </div>
   
  </DrawerContent>
</Drawer>
  )
}

export default CreateAccountDrawer