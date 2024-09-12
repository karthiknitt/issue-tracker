import { Button } from '@radix-ui/themes';
import React from 'react';
import Link from 'next/link';

const issuesPage = () => {
  return (
    <div>
      Issues Page
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default issuesPage;
