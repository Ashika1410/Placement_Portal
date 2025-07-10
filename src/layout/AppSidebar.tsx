import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDownIcon, HorizontalDotsIcon } from "../assets/icons";
import { useSidebar } from "../context/SidebarContext";
import { BookUp2, Building2, ClipboardMinus, Dock, FileUser, NotepadText, Projector, Settings, ShieldCheck, User, UserPen, UserPlus, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../reduxStore/store";
import axios from "axios";

type Role = "ADMIN" | "STUDENT" | "STAFF" | "COMPANY";

interface NavItem {
  name: string;
  path?: string;
  icon?: React.ReactNode;
  subItems?: { name: string; icon: React.ReactNode; path: string; new?:boolean; pro?:boolean }[];
  pro?: boolean;
  new?: boolean;
}

interface UserSidebarProps {
  role: Role;
}

const roleBasedMenus: Record<Role, NavItem[]> = {
  ADMIN: [
    {
      icon: <User />,
      name: "ADMIN",
      path: "/admin-dashboard",
      subItems: [
        { name: "Profile", icon: <UserPen />, path: "/profile/:id" },
        { name: "Student", icon: <Users />, path: "/student-list" },
        { name: "Staff", icon: <UserPlus />, path: "/staff-list" },
        { name: "Company", icon: <Building2 />, path: "/company-list" },
        { name: "Jobs", icon: <NotepadText />, path: "/job-page" },
        { name: "Report", icon: <ClipboardMinus />, path: "/report" },
        { name: "Settings", icon: <Settings />, path: '/profile/:id' },
      ],
    },
  ],
  STAFF: [
    {
      icon: <UserPlus />,
      name: "STAFF",
      path: "/staff-dashboard",
      subItems: [
        { name: "Profile", icon: <UserPen />, path: "/profile/:id" },
        { name: "Students", icon: <Users />, path: "/student-list" },
        { name: "Jobs", icon: <NotepadText />, path: "/job-page" },
        { name: "Settings", icon: <Settings />, path: '/profile/:id' },
      ],
    },
  ],
  STUDENT: [
    {
      name: "STUDENT",
      icon: <Users />,
      path: "/student-dashboard",
      subItems: [
        { name: "Profile", icon: <UserPen />, path: "/profile/:id" },
        { name: "Certifications", icon: <ShieldCheck />, path: "/certificate" },
        { name: "Projects", icon: <Projector />, path: "/project" },
        { name: "Resumes", icon: <FileUser />, path: "/resume" },
        { name: "Jobs", icon: <NotepadText />, path: "/job-page" },
        { name: "Application", icon: <Dock />, path: "/application" },
        { name: "Settings", icon: <Settings />, path: '/profile/:id' },
      ],
    },
  ],
  COMPANY: [
    {
      name: "COMPANY",
      icon: <Building2 />,
      path: "/company-dashboard",
      subItems: [
        { name: "Profile", icon: <UserPen />, path: "/profile/:id" },
        { name: "Jobs", icon: <NotepadText />, path: "/job-page" },
        { name: "Application", icon: <Dock />, path: "/company-apply" },
        { name: "PostJobs", icon: <BookUp2 />, path: "/jobpost" },
        { name: "Settings", icon: <Settings />, path: '/profile/:id' },
      ],
    },
  ],
};

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const reduxUser = useSelector((state: RootState) => state.auth.user);
  const id = reduxUser?.id || localStorage.getItem("userId");
  console.log(id);
  const role = reduxUser?.role || localStorage.getItem("role");
  const isSuperUser = role === "ADMIN";
  const navigate = useNavigate();

  const [user, setUser] = useState<UserSidebarProps | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<{ type: "main"; index: number } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    const fetchAndSetUser = async () => {
      const userId = reduxUser?.id;

      if (!userId) {
        console.warn("User ID is missing. Redirecting to signin.");
        navigate("/signin");
        return;
      }

      try {
        const res = await axios.get(`http://localhost:3000/user/${userId}`);
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch user info:", err);
      }
    };

    fetchAndSetUser();
  }, [reduxUser, navigate]);

  useEffect(() => {
    if (!user?.role) return;

    let matched = false;

    const role = user.role as keyof typeof roleBasedMenus;
    const menus = isSuperUser
      ? Object.values(roleBasedMenus).flat()
      : roleBasedMenus[role] || [];

    menus.forEach((item, index) => {
      item.subItems?.forEach((subItem) => {
        if (subItem.path && isActive(subItem.path)) {
          setOpenSubmenu({ type: "main", index });
          matched = true;
        }
      });
    });

    if (!matched) setOpenSubmenu(null);
  }, [location.pathname, isActive, isSuperUser, user?.role]);


  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main") => {
    setOpenSubmenu((prev) =>
      prev?.type === menuType && prev.index === index
        ? null
        : { type: menuType, index }
    );
  };

  const renderMenuItems = (items: NavItem[], menuType: "main") => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group ${openSubmenu?.type === menuType && openSubmenu?.index === index
                ? "menu-item-active"
                : "menu-item-inactive"
                } cursor-pointer ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"
                }`}
            >
              <span
                className={`menu-item-icon-size ${openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-icon-active"
                  : "menu-item-icon-inactive"
                  }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <>
                  <span className="menu-item-text">{nav.name}</span>
                  <ChevronDownIcon
                    className={`ml-auto w-5 h-5 transition-transform duration-200 ${openSubmenu?.type === menuType && openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                      }`}
                  />
                </>
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                  }`}
              >
                <span
                  className={`menu-item-icon-size ${isActive(nav.path)
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                    }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
              </Link>
            )
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
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem, subIndex) => (
                  <li key={`${subItem.name}-${subIndex}`}>
                    {subItem.path ? (
                      <Link
                        to={subItem.path}
                        className={`menu-dropdown-item ${isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                          }`}
                      > {subItem.icon}
                        {subItem.name}
                        <span className="flex items-center gap-1 ml-auto">
                          {subItem.new && (
                            <span
                              className={`menu-dropdown-badge ${isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                                }`}
                            >
                              new
                            </span>
                          )}
                          {subItem.pro && (
                            <span
                              className={`menu-dropdown-badge ${isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                                }`}
                            >
                              pro
                            </span>
                          )}
                        </span>
                      </Link>
                    ) : (
                      <span className="menu-dropdown-item">{subItem.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const menusToRender = useMemo(() => {
    if (isSuperUser) {
      return Object.values(roleBasedMenus).flat();
    }

    if (user?.role && user.role in roleBasedMenus) {
      return roleBasedMenus[user.role as keyof typeof roleBasedMenus];
    }

    return [];
  }, [isSuperUser, user?.role]);

  return (
    <div className="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(https://i.pinimg.com/736x/6d/fc/b8/6dfcb86a420b4c489a87c8a7d80faca9.jpg)` }}>
      <aside
        className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 dark:bg-gray-100 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
      ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"}
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0`}
        onMouseEnter={() => !isExpanded && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
          <Link to="/">
            {isExpanded || isHovered || isMobileOpen ? (
              <>
                <img
                  className="dark:hidden border-2 rounded-full"
                  src="../images/logo/Engineeringlogo.jfif"
                  alt="Placement Cell"
                  width={150}
                  height={40}
                />
                <img
                  className="hidden dark:block border-2 rounded-full"
                  src="../images/logo/Engineeringlogo.jfif"
                  alt="Placement Cell"
                  width={150}
                  height={40}
                />
              </>
            ) : (
              <img
                src="../images/logo/Engineeringlogo.jfif"
                alt="Placement Cell"
                width={32}
                height={32}
              />
            )}
          </Link>
        </div>

        <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
          <nav className="mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <h2
                  className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
                    }`}
                >
                  {isExpanded || isHovered || isMobileOpen ? (
                    "Menu"
                  ) : (
                    <HorizontalDotsIcon className="size-6" />
                  )}
                </h2>
                {renderMenuItems(menusToRender, "main")}
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default AppSidebar;

