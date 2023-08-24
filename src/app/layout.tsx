'use client';
import React, { useState } from "react";
import "@/style/global.css";
import "@/components/SearchBar";
import SearchBar from "@/components/SearchBar";
import {Metadata} from "next";

export const metadata : Metadata = {
    title : "NextJS crash course"
}
export default function RootLayout({children}: ChildrenProps) {
    const [search, setSearch] = useState("");
    return (
        <html>
            <body>
                <nav>
                    <a href="">Home</a>
                    <a href="/">About</a>
                    <a href="/">Posts</a>
                    <SearchBar />
                    
                </nav>
                {children}
            </body>
        </html>
    );
}