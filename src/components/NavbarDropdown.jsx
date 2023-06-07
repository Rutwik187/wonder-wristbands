import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import productsData from "../data";

const NavbarDropdown = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 ">
        Products
        <AiOutlineCaretDown className="ml-2 h-5 w-5" />
      </Menu.Button>
      <Transition
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items className="flex w-max flex-col space-y-2 px-6 py-3 text-[#696969] md:absolute md:-left-16 md:mt-2 md:rounded-lg  md:bg-white md:drop-shadow-md">
          {productsData.map((item, index) => (
            <Menu.Item key={index}>
              <Link
                to={`product-desc/${item.productId}`}
                className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0  hover:bg-[#5e0000] hover:text-white"
              >
                {item.name}
              </Link>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavbarDropdown;
