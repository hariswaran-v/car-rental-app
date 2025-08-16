import React, { useState } from "react";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";

const SideBar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState("");

  const updateImage = async () => {
    user.image = URL.createObjectURL(image);
    setImage("");
  };

  return (
    <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm">
      {/* Profile Image */}
      <div className="group relative">
        <label htmlFor="image">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  "https://in.pinterest.com/pin/317222367521433520/"
            }
            className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"
            alt="User"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer">
            <img src={assets.edit_icon} alt="Edit Icon" />
          </div>
        </label>
      </div>

      {/* Save Button */}
      {image && (
        <button
          className="absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer"
          onClick={updateImage}
        >
          Save
          <img src={assets.check_icon} width={13} alt="Check Icon" />
        </button>
      )}

      {/* Username */}
      <p className="mt-2 text-base max-md:hidden">{user?.name}</p>

      {/* Menu Links */}
      <div className="w-full">
        {ownerMenuLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${
              link.path === location.pathname
                ? "bg-primary/10 text-primary"
                : "text-gray-600"
            }`}
          >
            <img
              src={
                link.path === location.pathname ? link.coloredIcon : link.icon
              }
              alt={link.name}
            />
            <span className="max-md:hidden">{link.name}</span>
            <div
              className={`${
                link.path === location.pathname && "bg-primary"
              } w-1.5 h-8 rounded-l right-0 absolute`}
            ></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
