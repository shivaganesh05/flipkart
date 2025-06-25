"use client";
import React from "react";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  ShoppingCart,
  Bell,
  HelpCircle,
  TrendingUp,
  Download,
} from "lucide-react";
import { postLogin } from "@/services/productsApi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Login from "./login";
import { usePathname } from "next/navigation";
import { useSearch } from "@/app/SearchContext";
const Header = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  const pathname = usePathname();

  const isActive = pathname === "/cart";
  return (
    <header className="w-full bg-[#2874f0] text-white py-2 px-4">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className=" items-center  md:ml-20">
          <Link href="/" className="w-full d-block">
            <Image
              src="/flipkart-logo-image.png"
              alt="Flipkart Logo"
              width={80}
              height={30}
            />
            <div className="ml-1 flex items-center text-xs font-light leading-4">
              <span className="text-white">Explore </span>
              <span className="text-yellow-300 font-semibold ml-1">Plus</span>
              <span className="text-yellow-300 ml-1">+</span>
              <Image
                src="/plus.png"
                alt="Plus Icon"
                width={10}
                height={10}
                className="ml-1"
              />
            </div>
          </Link>
        </div>

        <div className="mt-3 md:mt-0  bg-white rounded-sm w-full md:w-[600px] relative">
          <input
            type="text"
            placeholder="Search for products, Category "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 px-4  rounded-sm text-black placeholder-gray-500 text-sm focus:outline-none"
          />
          <Search className="absolute right-3 top-2.5 text-[#2874f0] w-5 h-5" />
        </div>

        <div className="mt-3 md:mt-0 flex items-center gap-6 whitespace-nowrap text-sm font-medium">
          <Dialog>
            <DialogTrigger className="bg-white text-[#2874f0] px-6 mx-4 w-32 py-1 hover:shadow-sm">
              Login
            </DialogTrigger>
            <DialogContent className="shadow-lg">
              <DialogTitle className="sr-only">Login</DialogTitle>
              <Login />
            </DialogContent>
          </Dialog>

          <span className="hidden md:inline">Become a Seller</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="hidden md:flex items-center gap-1 cursor-pointer text-white text-sm font-medium">
                More <ChevronDown className="w-4 h-4" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 shadow-md">
              <DropdownMenuItem className="gap-2">
                <Bell className="w-4 h-4 text-blue-500" />
                Notification Preferences
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <HelpCircle className="w-4 h-4 text-blue-500" />
                24x7 Customer Care
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                Advertise
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Download className="w-4 h-4 text-blue-500" />
                Download App
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div
            className={`flex items-center gap-1 cursor-pointer px-3 py-1 rounded transition-all
        ${isActive ? "text-blue-600 bg-white" : "text-white"}
        hover:bg-white/20 hover:text-white`}
          >
            <ShoppingCart className="w-5 h-5" />
            <Link href="/cart">
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
