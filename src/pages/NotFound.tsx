
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-neutral-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-neutral-800">404</h1>
          <p className="text-xl text-neutral-600 mb-4">Oops! Page not found</p>
          <Link to="/">
            <Button variant="default" className="bg-primary hover:bg-primary-hover">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
