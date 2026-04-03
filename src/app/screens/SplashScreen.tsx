import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Cake } from "lucide-react";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-primary/20 flex items-center justify-center max-w-[430px] mx-auto">
      <div className="text-center animate-in fade-in zoom-in duration-700">
        <div className="mb-6 inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-2xl">
          <Cake className="w-16 h-16 text-primary" strokeWidth={2} />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Sandibel Suarez</h1>
        <p className="text-muted-foreground text-lg">Pasteleria</p>
      </div>
    </div>
  );
}