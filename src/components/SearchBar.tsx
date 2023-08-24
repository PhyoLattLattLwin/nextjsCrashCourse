'use client';
import { useState } from "react";

export default function SearchBar() {
    const [search, setSearch] = useState("");

    return (
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            alert(search);
        }}>
            <input type="search" placeholder="search posts..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button>search</button>
        </form>
    )
}