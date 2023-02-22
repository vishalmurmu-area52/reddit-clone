"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import { Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Typography variant="h1">Hello world</Typography>;
}
