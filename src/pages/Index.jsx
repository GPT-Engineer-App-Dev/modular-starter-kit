import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Application</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Welcome</h2>
        </CardHeader>
        <CardContent>
          <p>This is a bare-bones application that you can modify and build upon.</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Section 1</h3>
          </CardHeader>
          <CardContent>
            <p>Content for section 1 goes here.</p>
            <Button className="mt-4">Action 1</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Section 2</h3>
          </CardHeader>
          <CardContent>
            <p>Content for section 2 goes here.</p>
            <Button className="mt-4">Action 2</Button>
          </CardContent>
        </Card>
      </div>

      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;