import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-12 h-12 relative animate-pulse">
        <Image
          alt="Logo"
          src="/logo.png"
          fill
          className="rounded-full "
        />
      </div>
      <p className="text-sm text-muted-foreground animate-pulse font-bold" >
        AI is thinking...
      </p>
    </div>
  );
};