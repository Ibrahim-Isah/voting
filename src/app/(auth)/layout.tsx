const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" mt-20 flex h-full items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
