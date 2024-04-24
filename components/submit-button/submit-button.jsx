"use client";
import { useFormStatus } from "react-dom";
import { Button } from "flowbite-react";
function SubmitButton() {
  const status = useFormStatus();
  console.log({ status });
  return (
    <Button type="submit" isProcessing={status.pending}>
      Submit
    </Button>
  );
}

export default SubmitButton;
