import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [garmentType, setGarmentType] = useState("");
  const [measurements, setMeasurements] = useState("");
  const [measurementList, setMeasurementList] = useState([]);

  useEffect(() => {
    fetchMeasurements();
  }, []);

  const fetchMeasurements = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/measurements");
      setMeasurementList(response.data);
    } catch (error) {
      console.error("Error consultando las medidas", error);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMeasurement = { name, garmentType, measurements }
      await axios.post('http://localhost:5000/api/measurements', newMeasurement)
      fetchMeasurements();
      setName("");
      setGarmentType("");
      setMeasurements(""); 
    } catch (error) {
      console.error("Error enviando las medidas", error);
    }
  }

  return (
    <>
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Registro de medidas de costura</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block">Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border rounded w-full p-2" required />
        </div>

        <div className="mb-4">
          <label className="block">Tipo de prenda:</label>
          <input type="text" value={garmentType} onChange={(e) => setGarmentType(e.target.value)} className="border rounded w-full p-2" required />
        </div>

        <div className="mb-4">
          <label className="block">Medidas:</label>
          <input type="text" value={measurements} onChange={(e) => setMeasurements(e.target.value)} className="border rounded w-full p-2" required />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"> 
          Guardar medida
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Historial de medidas:</h2>
      <ul>
        {measurementList.map((measurement) => (
          <li key={measurement._id} className="mb-2 border-b pb-2">
              <strong>{measurement.name}</strong> - {measurement.garmentType} - {measurement.measurements}
              <span className="float-right text-gray-500">({new Date(measurement.date).toLocaleString()})</span>
          </li>
        ))}
      </ul>
    </div>
    </>
  )

};

export default App;
