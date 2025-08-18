import { useState } from "react";

function StringCompression() {
  const compressString = (str) => {
    if (!str) return "";

    let compressed = "";
    let count = 1;

    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        compressed += str[i - 1] + count;
        count = 1;
      }
    }

    compressed += str[str.length - 1] + count;

    return compressed.length < str.length ? compressed : str;
  };

  const [compressedString, setCompressedString] = useState("");
  const [description, setDescription] = useState("");

  const handleString = (e) => {
    const input = e.target.value;
    setDescription(input);
    const compressedResult = compressString(input);
    setCompressedString(compressedResult);
  };

  return (
    <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
      <h1 className="text-xl font-bold mb-4">String Compression</h1>
      <textarea
        className="w-full h-32 border border-gray-300 rounded p-2 text-sm"
        placeholder="Enter the string"
        value={description}
        onChange={handleString}
      />

      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h2 className="font-bold">Compressed String:</h2>
        <p className="text-gray-700">{compressedString}</p>
      </div>
    </div>
  );
}

export default StringCompression;
