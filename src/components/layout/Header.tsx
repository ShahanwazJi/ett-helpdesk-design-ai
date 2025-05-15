
import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10">
              <img 
                src="/placeholder.svg" 
                alt="Department of Telecommunications" 
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-neutral-800 leading-none">eTT Helpdesk</h1>
              <p className="text-xs text-neutral-500">Department of Telecommunications</p>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <Link 
                  to="/" 
                  className="text-neutral-700 hover:text-primary text-sm font-medium transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/new-ticket" 
                  className="text-neutral-700 hover:text-primary text-sm font-medium transition-colors"
                >
                  New Ticket
                </Link>
              </li>
              <li>
                <Link 
                  to="/check-status" 
                  className="text-neutral-700 hover:text-primary text-sm font-medium transition-colors"
                >
                  Ticket Status
                </Link>
              </li>
            </ul>
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-2">
            <UserIcon className="h-5 w-5 text-neutral-500" />
            <Link 
              to="/signin" 
              className="text-sm text-primary hover:text-primary-hover font-medium transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
