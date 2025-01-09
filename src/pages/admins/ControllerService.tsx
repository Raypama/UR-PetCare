import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/api";
import numeral from "numeral";
import MainTemplateSeller from "../../components/templates/MainTemplateSeller";

interface ServiceProps {
  id: number;
  name: string;
  description: string;
  price: string;
}

const ServiceAdmin = () => {
  const [service, setService] = useState<ServiceProps[] | null>(null);
  const [form, setForm] = useState<{
    id: number | null;
    name: string;
    description: string;
    price: string;
  }>({
    id: null,
    name: "",
    description: "",
    price: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const getService = async () => {
    const token = localStorage.getItem("token");
    const config = {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const response = await API.get("/service", config);
    setService(response.data.data);
  };

  useEffect(() => {
    getService();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const url = isEditing ? `/service/${form.id}` : "/service";
    const method = isEditing ? "patch" : "post"; // Axios menggunakan lowercase untuk method
  
    try {
      await API({
        method,
        url,
        data: {
          name: form.name,
          description: form.description,
          price: form.price,
        },
      });
  
      setForm({ id: null, name: "", description: "", price: "" });
      setIsEditing(false);
      getService(); // Refresh list service setelah berhasil submit
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  const handleEdit = (service: ServiceProps) => {
    setForm({
      id: service.id,
      name: service.name,
      description: service.description,
      price: service.price,
    });
    setIsEditing(true);
  };
  

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      await API.delete(`/service/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      getService(); // Refresh list service setelah berhasil delete
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };
  

  return (
    <MainTemplateSeller pageTitle="Service Pages">
      <div className="h-auto px-4 font-sans ">
        <div className="mb-10 pt-3">
          <h1 className="font-extrabold text-2xl text-center">
            Pet HealthCares
          </h1>

          {/* Form for Adding/Editing Service */}
          <form onSubmit={handleSubmit} className="mb-10 mt-8">
            <div className="flex ">
              <div className="block w-3/5">
                <div className="">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="Service Name"
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full h-12 mr-2 my-1"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    placeholder="Service Price"
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full h-12 mr-2 my-1"
                  />
                </div>
              </div>
              <div className="flex  items-center justify-evenly w-full">
                <div className="">
                  <textarea
                    name="description"
                    value={form.description}
                    placeholder="Service Description"
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-72 max-h-24 min-h-24 mr-2"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    {isEditing ? "Update" : "Add"} Service
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Table for CRUD */}
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {service?.map((item) => (
                <tr key={item.id} className="border">
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.description}</td>
                  <td className="border p-2">
                    Idr. {numeral(item.price).format("0,0")}
                  </td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainTemplateSeller>
  );
};

export default ServiceAdmin;
