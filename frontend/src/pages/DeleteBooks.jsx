import axios from "axios";
import React from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteBooks() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  let deleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Please try again.");
        console.log(error);
        navigate("/");
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : void 0}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={deleteBook}
        >
          Yes, Delete Book
        </button>
      </div>
    </div>
  );
}
