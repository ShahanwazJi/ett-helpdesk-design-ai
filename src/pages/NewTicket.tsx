
import React from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import Layout from '../components/layout/Layout';
import { 
  User, 
  Mail, 
  Phone, 
  FileQuestion, 
  ChevronDown, 
  Shield, 
  RotateCw, 
  X 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewTicket = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Ticket submitted",
      description: "Your ticket has been created successfully.",
    });
    reset();
  };

  const onReset = () => {
    reset();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-neutral-800">Create a New Support Ticket</h1>
            <p className="text-neutral-600 mt-2">
              Please fill in the details below to submit a new support request
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Ticket Information</CardTitle>
              <CardDescription>
                Provide your contact information and details about your issue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-neutral-700">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-neutral-500" />
                        Mobile Number
                      </Label>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="Enter your mobile number"
                        {...register('mobile', { required: true })}
                        className={errors.mobile ? 'border-red-500' : ''}
                      />
                      {errors.mobile && (
                        <p className="text-destructive text-xs">Mobile number is required</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="h-4 w-4 text-neutral-500" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        {...register('name', { required: true })}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-destructive text-xs">Full name is required</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-neutral-500" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        {...register('email', { required: true })}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-destructive text-xs">Email address is required</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-neutral-700">Issue Information</h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="portal" className="flex items-center gap-2">
                        <FileQuestion className="h-4 w-4 text-neutral-500" />
                        Select Portal
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a portal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saral-sanchar">Saral Sanchar</SelectItem>
                          <SelectItem value="dot-website">DoT Website</SelectItem>
                          <SelectItem value="network-status">Network Status Portal</SelectItem>
                          <SelectItem value="license-portal">License Management Portal</SelectItem>
                          <SelectItem value="other">Other Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="topic" className="flex items-center gap-2">
                        <FileQuestion className="h-4 w-4 text-neutral-500" />
                        Help Topic
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical Issue</SelectItem>
                          <SelectItem value="account">Account Access</SelectItem>
                          <SelectItem value="payment">Payment Issue</SelectItem>
                          <SelectItem value="complaint">Service Complaint</SelectItem>
                          <SelectItem value="inquiry">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description" className="flex items-center gap-2">
                        <FileQuestion className="h-4 w-4 text-neutral-500" />
                        Issue Description
                      </Label>
                      <textarea
                        id="description"
                        placeholder="Please describe your issue in detail"
                        rows={4}
                        {...register('description', { required: true })}
                        className={`w-full rounded-md border ${
                          errors.description ? 'border-red-500' : 'border-neutral-300'
                        } bg-white px-3 py-2 text-neutral-800 shadow-input focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                      ></textarea>
                      {errors.description && (
                        <p className="text-destructive text-xs">Description is required</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border border-neutral-200 rounded-md p-4 bg-neutral-50 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Shield className="h-6 w-6 text-neutral-500" />
                    </div>
                    <div className="flex-grow">
                      <Label htmlFor="captcha" className="text-sm font-medium text-neutral-700">
                        CAPTCHA Verification
                      </Label>
                      <div className="mt-1 flex items-center">
                        <div className="bg-white border border-neutral-300 rounded-md p-2 mr-2 w-32 h-10 flex items-center justify-center">
                          <span className="text-xs text-neutral-800 font-mono tracking-wider">CAPTCHA</span>
                        </div>
                        <Input
                          id="captcha"
                          type="text"
                          placeholder="Enter code"
                          className="w-32"
                          {...register('captcha', { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardFooter className="flex justify-between px-0 pt-4">
                  <div className="flex gap-4">
                    <Button 
                      type="submit" 
                      className="bg-primary hover:bg-primary-hover text-white flex items-center space-x-2"
                    >
                      Create Ticket
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onReset}
                      className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 flex items-center space-x-2"
                    >
                      <RotateCw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => window.history.back()}
                    className="bg-destructive hover:bg-destructive-hover flex items-center space-x-2"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default NewTicket;
