
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, Menu, X } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/new-ticket", label: "New Ticket" },
    { path: "/check-status", label: "Ticket Status" },
  ];

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

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-neutral-700 hover:text-primary text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Section */}
          <div className="hidden md:flex items-center space-x-2">
            <UserIcon className="h-5 w-5 text-neutral-500" />
            <Link 
              to="/signin" 
              className="text-sm text-primary hover:text-primary-hover font-medium transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button 
                  aria-label="Menu" 
                  className="text-neutral-700 p-2"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="py-6">
                    <h2 className="text-lg font-bold text-neutral-800">Menu</h2>
                  </div>
                  <nav className="flex-1">
                    <ul className="space-y-4">
                      {navItems.map((item) => (
                        <li key={item.path}>
                          <SheetClose asChild>
                            <Link 
                              to={item.path} 
                              className="flex items-center py-2 text-base font-medium text-neutral-700 hover:text-primary transition-colors"
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="py-6 border-t border-gray-200">
                    <SheetClose asChild>
                      <Link 
                        to="/signin" 
                        className="flex items-center space-x-2 text-primary hover:text-primary-hover font-medium transition-colors"
                      >
                        <UserIcon className="h-5 w-5" />
                        <span>Sign In</span>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
