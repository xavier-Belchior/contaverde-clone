import { ChevronDown, Phone, TextAlignEnd } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const navItems = [
    {
      label: "Início",
      href: "/",
    },
    {
      label: "Produtos",
      href: "/produtos",
      hasDropdown: true,
    },
    {
      label: "Como Pedir",
      href: "/#como-pedir",
    },
    {
      label: "Sobre Nós",
      href: "/#sobre-nos",
    },
    {
      label: "Contacto",
      href: "/#contacto",
    },
  ];
  return (
    <header className="p-6 md:p-8 flex items-center justify-between w-full fixed top-0 left-0 z-50">
      <div className="text-2xl font-bold font-['Releway'] text-relaxed text-white tracking-tight z-50  ">
       Conta Verde

        <span className="text-xs  align-top font-light">*</span>
      </div>

      <nav className="absolute hidden sm:block  bg-[#559C0D] px-4.5 py-2   rounded-4xl z-10 left-1/2 -translate-x-1/2 ">
        <ul className="flex items-center gap-8 text-white group font-normal text-tight">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.href.includes("#") ? (
                <a
                  href={item.href}
                  className="flex items-center gap-2 transition-all duration-300 hover:opacity-100 opacity-80 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  to={item.href}
                  onClick={item.hasDropdown ? ()=>setIsProductsOpen(!isProductsOpen): undefined}
                  className={({ isActive }) =>
                    isActive
                      ? "flex gap-2 items-center transition-color duration-300  bg-white text-green-600 px-8 py-2 rounded-4xl "
                      : "flex items-center transition-all duration-300 hover:opacity-100 opacity-80 whitespace-nowrap"
                  }
                >
                  {item.label}  {item.hasDropdown && <ChevronDown  /> }</NavLink>
              )}
                  {item.hasDropdown ? (
                    <>
                      
                     
                     {isProductsOpen &&(
                      <ul className="absolute bg-white  whitespace-wrap p-2  top-10 left-0 w-full flex flex-col justify-center items-center gap-2 mt-2 rounded-xl shadow-lg z-10">
                        <li className="bg-white text-green-600  " onClick={()=>setIsProductsOpen(false)}>
                         <Link to="/produtos" >Mama Negocio</Link>
                        </li>
                        <li className="bg-white text-green-600 " onClick={()=>setIsProductsOpen(false)}>
                         <Link to="/funciona">Fezada Propina</Link>
                        </li>
                      </ul>
                     
                     )
                      
                     } 
                    </>
                  ) :  null
                  }
               
            </li>
          ))}

          <li className="relative flex justify-center items-center   bg-white text-green-600 w-10 h-10   rounded-full">
            <Phone className="" />
          </li>
        </ul>
      </nav>
 
      <div className="block sm:hidden text-white"><TextAlignEnd  /></div>
    </header>
  );
}
