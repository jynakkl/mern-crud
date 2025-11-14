import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const [formData, setFormData] = useState({ title: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  // API'den mevcut todo'yu çek
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/todos/${id}`);
        setFormData({ title: res.data.message.title });
      } catch (error) {
        alert(error.response?.data?.message || "Something went wrong!");
      }
    };
    fetchTodo();
  }, [id]);

  // Input değişimlerini yakala
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit ile todo güncelle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/todos/${id}`, formData);
      alert("Todo updated successfully!");
      navigate("/"); // Ana sayfaya yönlendir
    } catch (error) {
      alert(error.response?.data?.message || "Update failed!");
    }
  };

  return (
    <div>
      <div className="max-w-xl mx-auto my-20 text-center">
        <form className="flex gap-20 flex-col" onSubmit={handleSubmit}>
          <div>
            <h1>Todo Title</h1>
            <input
              className="input focus:outline-0"
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter todo title"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-square w-80">
              Update Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
