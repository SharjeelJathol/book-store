// import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeleteBooks from "./pages/DeleteBooks";
import EditBooks from "./pages/EditBooks";
import CreateBooks from "./pages/CreateBooks";
import BookDetails from "./pages/BookDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<BookDetails />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
      <Route path="/books/edit/:id" element={<EditBooks />} />
    </Routes>
    // <h1 className="text-3xl font-bold underline bg-red-300">Hello world!</h1>
  );
}
