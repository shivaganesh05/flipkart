"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Input } from "../ui/input";
import {
  BadgePercent,
  Bell,
  ChevronDown,
  CircleUserRound,
  CreditCard,
  Download,
  EllipsisVertical,
  Gift,
  Heart,
  HelpCircle,
  Package,
  Search,
  ShoppingCart,
  TrendingUp,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/context/cartContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MainHeader = () => {
  const [position, setPosition] = React.useState("left");
  const pathname = usePathname();

  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = pathname === "/cart";
  return (
    <div className="w-full px-4 py-3 shadow-sm border-b-1 border-gray-300">
      <div className="flex items-center justify-between md:hidden">
        <div className="flex items-center space-x-2">
          <Image
            src="logoflipkart.svg"
            alt="Company Logo"
            width={110}
            height={40}
            className="object-contain"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center text-sm text-black/70">
            <CircleUserRound />
            <span className="ml-1">Login</span>
          </button>
          <button className="text-black/70">
            <ShoppingCart />
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-between pt-3 ps-8">
        <div className="">
          <Image
            src="logoflipkart.svg"
            alt="Company Logo"
            width={164}
            height={134}
            className="object-contain"
          />
        </div>

        <div className="w-full mx-10 flex items-center">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <Input
              className="w-[730px] h-11 pl-10 border-0 bg-[#F0F5FF] text-lg 
                     placeholder:text-lg placeholder:font-sans placeholder:text-gray-500"
              placeholder="Search for products, Category "
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center bg-white text-black hover:bg-blue-500 hover:text-white px-4 py-1 rounded-sm text-sm font-medium hover:shadow-sm">
                <User className="w-4 h-4 mr-1" />
                Login
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-64 mt-2 shadow-lg rounded-lg px-2 py-3">
              <div className="flex justify-between items-center px-2 mb-2">
                <p className="text-sm text-gray-500">New customer?</p>
                <button className="text-[#2874f0] text-sm font-semibold hover:underline">
                  Sign Up
                </button>
              </div>
              <DropdownMenuSeparator />

              <DropdownMenuItem className="gap-2 text-sm">
                <User className="w-4 h-4 text-black" />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-sm">
                <BadgePercent className="w-4 h-4 text-black" />
                Flipkart Plus Zone
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-sm">
                <Package className="w-4 h-4 text-black" />
                Orders
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-sm">
                <Heart className="w-4 h-4 text-black" />
                Wishlist
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-sm">
                <Gift className="w-4 h-4 text-black" />
                Rewards
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-sm">
                <CreditCard className="w-4 h-4 text-black" />
                Gift Cards
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div
            className={`flex items-center gap-1 cursor-pointer px-3 py-1 rounded transition-all
        ${isActive ? "text-black bg-blue-600" : "text-black"}
        hover:bg-white/20 hover:text-black`}
          >
            <ShoppingCart className="w-5 h-5" />
            <Link href="/cart" className="relative">
              Cart
              <span className="relative">
                {cartCount > 0 && (
                  <span className="ml-1 bg-blue-600 text-white px-2 rounded-full">
                    {cartCount}
                  </span>
                )}
              </span>
            </Link>
          </div>

          <button className="hidden md:flex items-center ms-4 whitespace-nowrap text-black/70">
            <Gift />
            <span className="ms-2">Become A Seller</span>
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="hidden ml-10 md:flex items-center gap-1 cursor-pointer text-white text-sm font-medium">
                <EllipsisVertical className="text-black/70" />
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
        </div>
      </div>

      <div className="mt-4 md:hidden">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for Products"
            className="w-full h-11 pl-10 pr-4 border rounded-md border-blue-400 focus:outline-none text-sm placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;