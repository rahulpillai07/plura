import Navigation from "@/components/site/navigation";

const AuthLayout = ({children}:{children:React.ReactPortal}) => {
    return ( 
        <div className="h-full flex items-center justify-center">
            {children}
        </div>
    );
}
 
export default AuthLayout;