import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const MeasurementForm = () => {
  const [name, setName] = useState("Sonia");
  const [date, setDate] = useState("13-09-24");
  const [garmentType, setGarmentType] = useState("Falda");
  const [measurements, setMeasurements] = useState({
    cuello: "10 cm",
    hombro: "60cm",
    escoteD: "20cm",
    escoteT: "20cm",
    pecho: "30cm",
    largo_pinza: "50cm",
    largo_talle_delantero: "10cm",
    largo_talle_trasero: "10cm",
    espalda: "60cm",
    sisa_d: "30cm",
    sisa_t: "30cm",
    cintura_alta: "40cm",
    cintura_baja: "30cm",
    largo_blusa: "20cm",
    cadera: "90cm",
    bajada_cadera: "30cm",
    largo_rodilla: "20cm",
    contrno_rodilla: "20cm",
    largo_tobillo: "30cm",
    contorno_tobillo: "20cm",
    largo_al_piso: "60cm",
  });

  return (
    <div className="min-h-screen bg-purple-900 p-4 text-white">
      <div className="max-w-md mx-auto bg-purple-800 rounded-lg p-4 mb-4">
        <h1 className="text-2xl font-bold text-center">{name}</h1>
      </div>
      <div className="max-w-md mx-auto bg-purple-800 rounded-lg p-4 space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Nombre</label>
          <input
            className="w-full p-2 rounded bg-purple-700"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Fecha</label>
        <input
          className="w-full p-2 rounded bg-purple-700"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Tipo de prenda</label>
        <input
          className="w-full p-2 rounded bg-purple-700"
          type="text"
          value={garmentType}
          onChange={(e) => setGarmentType(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Medidas</h2>
        <div className="relative">
          <select className="w-full p-2 rounded bg-purple-700 appearance-none">
            <option value="">Seleccionar medida</option>
          </select>
          <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        </div>
      </div>
      {Object.entries(measurements).map(([key, value]) => (
        <div key={key} className="space-y-2">
          <label className="block text-sm font-medium capitalize">
            {key.replace(/_/g, " ")}
          </label>
          <input
            className="w-full p-2 rounded bg-purple-700"
            type="text"
            value={value}
            onChange={(e) =>
              setMeasurements({ ...measurements, [key]: e.target.value })
            }
          />
        </div>
      ))}
    </div>
  );
};

export default MeasurementForm;
