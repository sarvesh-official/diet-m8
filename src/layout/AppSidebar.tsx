"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  Home,
  Bell,
  ClipboardList,
  Settings,
  LogOut,
  MoreHorizontal,
  ChevronDown,
  UserCircle,
  Calendar,
  Droplets,
  ChartAreaIcon
} from "lucide-react";
import { cn } from "../lib/utils";

const renderIcon = (icon: React.ReactNode) => {
  if (React.isValidElement(icon)) {
    return icon;
  }
  return icon; 
};

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; }[];
};

const navItems: NavItem[] = [
  {
    icon: <Home size={20} />,
    name: "Home",
    path: "/dashboard"
  },
  {
    icon: <ClipboardList size={20} />,
    name: "Diet Plan",
    path: "/dashboard/diet-plan"
  },
  {
    icon: <Calendar size={20} className="ai-consultation-icon" />,
    name: "AI Consultation",
    path: "/consultation"
  },
  {
    icon: <Droplets size={20} />,
    name: "Water Tracker",
    path: "/water-tracker"
  },
  {
    icon: <ChartAreaIcon size={20} />,
    name: "BMI Calculator",
    path: "/bmi-calculator"
  }
];

const othersItems: NavItem[] = [
  {
    icon: <UserCircle size={20} />,
    name: "Profile",
    path: "/profile"
  },
  {
    icon: <Bell size={20} />,
    name: "Notifications",
    path: "/notifications"
  },
  {
    icon: <Settings size={20} />,
    name: "Settings",
    path: "/settings"
  },
  {
    icon: <LogOut size={20} />,
    name: "Logout",
    path: "/logout"
  }
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "others"
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={cn(
                "relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-sm",
                nav.path && isActive(nav.path)
                  ? "bg-soft-aqua text-teal-primary"
                  : "hover:bg-soft-aqua hover:text-teal-primary"
              )}
            >
              <span>
                {renderIcon(nav.icon)}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text">{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDown
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-teal-primary bg-soft-aqua"
                      : ""
                  }`}
                  size={20}
                />
              )}
            </button>
          ) : (
            <Link
              href={nav.path || "#"}
              className={cn(
                "relative flex items-center gap-3 px-3 py-2 font-medium rounded-lg text-sm",
                nav.path && isActive(nav.path)
                  ? "bg-soft-aqua text-teal-primary"
                  : "hover:bg-soft-aqua hover:text-teal-primary"
              )}
            >
              <span>
                {renderIcon(nav.icon)}
              </span>
              <span
                className={`whitespace-nowrap ${
                  !isExpanded && !isHovered ? "opacity-0" : "opacity-100"
                } transition-opacity duration-200`}
              >
                {nav.name}
              </span>
            </Link>
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px"
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item relative flex hover:text-teal-primary hover:bg-soft-aqua items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active bg-soft-aqua text-teal-primary"
                          : "menu-dropdown-item-inactive text-gray-600"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white text-gray-700 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[85px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/dashboard">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <div className="flex items-center gap-2">
                <Image src="/logo-nobg.png" width={40} height={40} alt="Diet M8 logo" className="object-contain" />
                <h1 className="text-teal-primary font-black text-2xl tracking-wide">DIET M8</h1>
              </div>
            </>
          ) : (
            <Image
              src="/logo-nobg.png"
              alt="Diet M8 logo"
              width={32}
              height={32}
              priority
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar flex-grow">
        <nav>
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <MoreHorizontal size={20} />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
          </div>
        </nav>
      </div>
      
      {/* Others section fixed at bottom */}
      <div className="mt-auto pb-6 pt-4 border-t border-gray-100">
        <div>
          <h2
            className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
              !isExpanded && !isHovered
                ? "lg:justify-center"
                : "justify-start"
            }`}
          >
            {isExpanded || isHovered || isMobileOpen ? (
              "Account"
            ) : (
              <MoreHorizontal size={20} />
            )}
          </h2>
          {renderMenuItems(othersItems, "others")}
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
