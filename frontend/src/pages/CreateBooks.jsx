import React from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function CreateBooks() {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [publishYear, setPublishYear] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  let saveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    console.log(data);
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4xl mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              className="border-gray-500 border-2 px-4 py-2 w-full"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              className="border-gray-500 border-2 px-4 py-2 w-full"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              className="border-gray-500 border-2 px-4 py-2 w-full"
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={saveBook}>
            Save Book
          </button>
        </div>
      )}
    </div>
  );
}
