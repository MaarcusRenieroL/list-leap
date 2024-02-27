import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ClerkProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </ClerkProvider>
    </QueryProvider>
  );
};

export default PlatformLayout;
