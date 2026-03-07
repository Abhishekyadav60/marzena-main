"use client"

import { Children } from "react";
import Sidebar from "./components/Sidebar";

export default function Layout({ Children}) {
    return <main className="flex-1">
        <Sidebar/>
       <section> {Children}</section>
        </main>
}                      