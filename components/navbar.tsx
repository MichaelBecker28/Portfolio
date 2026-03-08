"use client"
import { useRouter, usePathname } from "next/navigation"
import { MenuContainer, MenuItem } from "@/components/ui/fluid-menu"
import { Menu as MenuIcon, X, Home, User, Briefcase, BookOpen, Mail } from "lucide-react"

const navItems = [
  { icon: Home,      label: "Home",        href: "/" },
  { icon: User,      label: "About",       href: "/about" },
  { icon: Briefcase, label: "Projects",    href: "/projects" },
  { icon: BookOpen,  label: "Reflections", href: "/reflections" },
  { icon: Mail,      label: "Contact",     href: "/contact" },
]

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="fixed top-6 left-6 z-50">
      <MenuContainer>
        {/* Toggle trigger — shows hamburger / X */}
        <MenuItem
          icon={
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                <MenuIcon size={24} strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                <X size={24} strokeWidth={1.5} />
              </div>
            </div>
          }
        />

        {/* Nav links */}
        {navItems.map(({ icon: Icon, label, href }) => (
          <MenuItem
            key={href}
            isActive={pathname === href}
            onClick={() => router.push(href)}
            icon={
              <div className="flex flex-col items-center gap-0.5">
                <Icon
                  size={20}
                  strokeWidth={pathname === href ? 2.5 : 1.5}
                  className={pathname === href ? "text-white" : "text-gray-400"}
                />
                <span className="text-[9px] font-medium tracking-wide text-gray-400 leading-none">
                  {label}
                </span>
              </div>
            }
          />
        ))}
      </MenuContainer>
    </div>
  )
}
