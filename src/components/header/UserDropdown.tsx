import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";

import { RootState } from "../../reduxStore/store";
import { logout, setUser } from "../../reduxStore/authSlice";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Dropdown } from "../ui/dropdown/Dropdown";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<{ avatarUrl?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  // Fetch user data from localStorage (fallback)
  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        const userId = parsedUser?.id;

        if (userId) {
          axios
            .get(`http://localhost:3000/user/${userId}`)
            .then((response) => {
              dispatch(setUser(response.data));
            })
            .catch((err) => {
              console.error("Error fetching user:", err);
            });
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [dispatch]);

  // Handle profile image upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user?.id) return;

    // Temp preview
    const tempUrl = URL.createObjectURL(file);
    setFormData({ avatarUrl: tempUrl });

    try {
      const form = new FormData();
      form.append("avatar", file);

      const uploadRes = await axios.post("http://localhost:3000/upload", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const uploadedUrl = uploadRes.data.avatarUrl;

      await axios.put(`http://localhost:3000/user/${user.id}`, {
        avatarUrl: uploadedUrl,
      });

      dispatch(setUser({ ...user, avatarUrl: uploadedUrl }));
      setFormData({ avatarUrl: uploadedUrl });
    } catch (err) {
      console.error("Image upload failed:", err);
      setError("Image upload failed");
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 dark:text-gray-400"
      >
        <img
          src={user?.avatarUrl}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover mr-2"
        />
        <span className="block mr-1 font-medium text-theme-sm">
          {user?.name}
        </span>
        <svg
          className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] w-[260px] rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <div className="flex items-center gap-3 mb-3">
          <label className="text-xs font-medium">Update Profile</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div>
          <span className="block font-medium text-gray-700 dark:text-gray-400">
            {user?.name || 'Name'}
          </span>
          <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">
            {user?.email || 'Email'}
          </span>
        </div>

        <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
          <Link to={`/profile/${user?.id}`}>
            <li>
              <DropdownItem
                onItemClick={closeDropdown}
                tag="a"
                className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
              >
                <span>Edit profile</span>
              </DropdownItem>
            </li>
          </Link>
        </ul>

        <div className="pt-3">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-sm font-medium text-left text-red-600 hover:text-red-800 dark:hover:text-red-400"
          >
            Log out
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
