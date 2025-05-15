
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Layout from '../components/layout/Layout';
import { Mail, Search, FileSearch } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const CheckStatus = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Searching for ticket",
      description: "We're looking up your ticket information.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-neutral-800">Check Ticket Status</h1>
            <p className="text-neutral-600 mt-2">
              Enter your email address and ticket number to check the status of your request
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileSearch className="h-5 w-5 mr-2 text-primary" />
                Ticket Lookup
              </CardTitle>
              <CardDescription>
                Please provide the details used when the ticket was created
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-neutral-500" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter the email address used for the ticket"
                      {...register('email', { required: true })}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs">Email address is required</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ticketNumber" className="flex items-center gap-2">
                      <FileSearch className="h-4 w-4 text-neutral-500" />
                      Ticket Number
                    </Label>
                    <Input
                      id="ticketNumber"
                      type="text"
                      placeholder="Enter your ticket number (e.g., DOT-12345)"
                      {...register('ticketNumber', { required: true })}
                      className={errors.ticketNumber ? 'border-red-500' : ''}
                    />
                    {errors.ticketNumber && (
                      <p className="text-destructive text-xs">Ticket number is required</p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center"
                >
                  <Search className="h-4 w-4 mr-2" />
                  View Ticket
                </Button>

                <div className="text-center text-sm text-neutral-600 mt-4">
                  <p>
                    Don't have a ticket yet?{" "}
                    <Link to="/new-ticket" className="text-primary hover:text-primary-hover font-medium">
                      Create a new support request
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CheckStatus;
