import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  MenuAlt1Icon,
  BellIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  ChatAltIcon,
  CogIcon
} from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <nav className="mb-5 shadow-md bg-white relative z-20 flex shrink-0 items-center space-x-2 bg-layer-2 py-3 px-8 sm:px-12 w-full">
         <div>
         <img   className="inline-block h-8 w-13 " src="https://img.playbook.com/a-QDQJi2O57A1j5l2QOs9NdHCjeCdTNJZ6m9gntTkCc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzYzNmVlYTI5/LTA3YWYtNDE1ZS05/OWMwLTMwMWMyMzcy/NWEzZA" alt="" />
         </div>
      <div>
        <label
          htmlFor="search"
          className="sr-only block text-sm font-semibold text-heading"
        >
          Search
        </label>
        <div className="relative ml-12 flex">
         
          <input
            id="search"
            name="search"
            placeholder="Search"
            className="block shadow-md w-full h-9  border-layer-3 bg-muted-1 px-4 py-2.5 pl-11 pr-14 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
          />
           <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-shrink-0 items-center pl-4 focus-within:z-20">
            <SearchIcon className="h-4 w-4 text-text" />
          </div>
        </div>
      </div>
      <div className="flex-1" />
      <div className="flex items-center space-x-3">
      <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2.5 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
        >
          <SunIcon className="h-5 w-5" />
          
        </button>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2.5 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
        >
          <ChatAltIcon className="h-5 w-5" />
          
        </button>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2.5 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
        >
            
          <BellIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2.5 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
        >
          <CogIcon className="h-5 w-5" />
          
        </button>
     
        <Menu as="div" className="relative">
          <Menu.Button type="button">
            <img
              src="https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/nicholas-turner.png"
              alt="avatar"
              className="inline-block h-8 w-8 rounded-full"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-layer-3 py-3 shadow-xl focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}