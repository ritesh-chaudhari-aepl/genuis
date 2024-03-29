import React from "react";

import {
  Navbar,
  Collapse,
  Typography,
  // Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  // UserCircleIcon,
  // CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

import logo from "../../assets/logo.webp";
import { BsWhatsapp } from "react-icons/bs";
const colors = {
  blue: "bg-[blue] text-[blue]/300",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
  {
    color: "blue",
    icon: FlagIcon,
    title: "About us",
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Press",
    description: "News and writings, press releases, and resources",
  },
  {
    color: "green",
    icon: UsersIcon,
    title: (
      <div className="flex items-center gap-1">
        Careers{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="We're hiring!"
          className="capitalize"
        />
      </div>
    ),
    description: "We are always looking for talented people. Join us!",
  },
  {
    color: "blue-gray",
    icon: FolderIcon,
    title: "Legal",
    description: "All the stuff that we dan from legal made us add.",
  },
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "Products",
    description: "Checkout our products that helps a startup running.",
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "Icons",
    description: "Set of beautiful icons that you can use in your project.",
  },
  {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "UI Kits",
    description: "High quality UI Kits helps you to 2x faster.",
  },
  {
    color: "pink",
    icon: GiftIcon,
    title: "Open Source",
    description: "List of all our open-source projects, it's all free.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key} className="cursor-pointer hover:no-underline">
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center text-lg text-black gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {/* home  */}
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="cursor-pointer font-medium text-lg"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          {/* <CubeTransparentIcon className="h-[18px] w-[18px]" /> */}
          <HomeIcon className="  text-black font-semibold w-[32px]" />
        </ListItem>
      </Typography>

      {/* services */}
      <NavListMenu />

      {/* blog */}
      <Typography
        as="a"
        href="/blogs"
        variant="small"
        color="blue-gray"
        className="cursor-pointer font-normal text-black text-lg"
      >
        <ListItem className="flex items-center  gap-2 py-2 pr-4">
          Blogs
        </ListItem>
      </Typography>

      {/* reviews */}
      <Typography
        as="a"
        href="/review"
        variant="small"
        color="blue-gray"
        className="font-normal cursor-pointer text-black text-lg"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Reviews
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className=" fixed w-full bg-white">
      <Navbar className="mx-auto max-w-screen-2xl   px-4 py-2">
        <div className="flex items-center mx-auto justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            <img
              src={logo}
              loading="eager"
              width="100%"
              height="100%"
              className="w-20 md:w-24"
              alt="Genius Tutors Logo"
              title="Genius Tutors Logo"
              // alt="Genius Tutors' emblem featuring interconnected devices, symbolizing IoT's vast network and technological prowess for homework assistance."
            />
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <a
              href="https://wa.me/918210403033"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 cursor-pointer items-center rounded-full bg-green-dark md:px-8 md:py-4 px-3 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
            >
              <BsWhatsapp className="md:text-xl md:font-bold text-lg font-normal" />
              Chat on Whatsapp
            </a>
          </div>
          <IconButton
            variant="text"
            color=""
            className="lg:hidden text-black w-10 h-10"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-h-6  " strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-h-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/918210403033"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center rounded-full bg-green-dark md:px-8 md:py-4 px-3 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
            >
              <BsWhatsapp className="md:text-xl md:font-bold text-lg font-normal" />
              Chat on Whatsapp
            </a>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
