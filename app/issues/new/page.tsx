'use client';
import React from 'react';

import { Button, TextField } from '@radix-ui/themes';
import { TextArea } from '@radix-ui/themes';

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      NewIssuePage
      <TextField.Root placeholder="Title"></TextField.Root>
      <TextArea placeholder="Add Issue Description.." />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
