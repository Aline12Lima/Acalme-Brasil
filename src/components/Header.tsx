import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-primary shadow-natural sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Natural Medicine Logo" className="h-12 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-primary-foreground hover:text-secondary transition-smooth font-medium"
          >
            Página Inicial
          </Link>
          <Link 
            to="/sobre" 
            className="text-primary-foreground hover:text-secondary transition-smooth font-medium"
          >
            Sobre
          </Link>
          <Link 
            to="/artigos" 
            className="text-primary-foreground hover:text-secondary transition-smooth font-medium"
          >
            Artigos
          </Link>
          <Link 
            to="/associe-se" 
            className="text-primary-foreground hover:text-secondary transition-smooth font-medium"
          >
            Associe-se
          </Link>
          <Link 
            to="/contato" 
            className="text-primary-foreground hover:text-secondary transition-smooth font-medium"
          >
            Contato
          </Link>
          <Button variant="secondary" size="sm" className="flex items-center gap-2">
            <User size={16} />
            Login
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="secondary" size="sm" className="flex items-center gap-2">
            <User size={16} />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;