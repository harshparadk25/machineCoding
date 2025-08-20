import { useState } from "react";
import { Button } from "../../components/ui/button";

// Custom Promise.allSettled
const customPromiseAll = (promises) => {
  return new Promise((resolve) => {
    const results = [];
    let completed = 0;
    const totalPromises = promises.length;

    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = { status: "fulfilled", value: result };
        })
        .catch((error) => {
          results[index] = { status: "rejected", reason: error };
        })
        .finally(() => {
          completed++;
          if (completed === totalPromises) {
            resolve(results);
          }
        });
    });
  });
};

// Fetch functions
const fetchData = () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => data.products)
    .catch((error) => Promise.reject(error));
};

const fetchUsers = () => {
  return fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => data.users)
    .catch((error) => Promise.reject(error));
};

const fetchCarts = () => {
  return fetch("https://dummyjson.com/carts")
    .then((res) => res.json())
    .then((data) => data.carts)
    .catch((error) => Promise.reject(error));
};

function CustomPromiseAll() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchData = async () => {
    setLoading(true);

    const promises = [fetchData(), fetchUsers(), fetchCarts()];

    try {
      const response = await customPromiseAll(promises); // ✅ wait for results
      setResults(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Custom Promise.all Implementation</h1>
      <div className="mt-5">
        <Button onClick={handleFetchData}>
          {loading ? "Loading..." : "Fetch Data"}
        </Button>
        <div className="flex flex-col mt-5 gap-5">
          {results.map((r, index) => (
            <div key={index} className="p-2 border rounded bg-white shadow">
              {r.status === "fulfilled" ? (
                <pre className="text-sm text-green-700">
                  {JSON.stringify(r.value.slice(0, 2), null, 2)} {/* showing first 2 */}
                </pre>
              ) : (
                <p className="text-red-600">Error: {String(r.reason)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomPromiseAll;
