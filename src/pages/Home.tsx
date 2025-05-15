
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TicketIcon, SearchIcon } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      <section className="relative py-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 z-0 opacity-10 transition-transform duration-300"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollPosition * 0.2}px)`
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-neutral-800 mb-4">Welcome to eTT Helpdesk System</h1>
            <p className="text-lg text-neutral-600 mb-8">
              A streamlined support portal for the Department of Telecommunications to assist with your inquiries and issues.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/new-ticket">
                <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-base flex items-center space-x-2">
                  <TicketIcon className="h-5 w-5 mr-2" />
                  <span>Open a New Ticket</span>
                </Button>
              </Link>
              <Link to="/check-status">
                <Button variant="secondary" className="bg-secondary hover:bg-secondary-hover text-white px-8 py-6 text-base flex items-center space-x-2">
                  <SearchIcon className="h-5 w-5 mr-2" />
                  <span>Check Ticket Status</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-50 p-6 rounded-lg shadow-card">
                <h3 className="font-semibold text-xl mb-3">Quick Support</h3>
                <p className="text-neutral-600">
                  Get immediate assistance for your telecommunications issues through our helpdesk portal.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg shadow-card">
                <h3 className="font-semibold text-xl mb-3">Track Progress</h3>
                <p className="text-neutral-600">
                  Monitor the status of your support tickets in real-time with our easy tracking system.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg shadow-card">
                <h3 className="font-semibold text-xl mb-3">Find Solutions</h3>
                <p className="text-neutral-600">
                  Access our knowledge base for solutions to common telecommunications problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
