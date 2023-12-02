import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";
import { useEffect } from "react";
import SimplePieChart from "../Components/SimplePieChart";

const Data = ({ userId }) => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  // loader
  const [loading, setLoading] = useState(false);

  //state management for filtered posts
  const [posts, setPosts] = useState([]);

  // state management for original unfiltered posts 
  const[originalPost,setOriginalPost]=useState([]);

  // function to fetch data from API
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      // updating the original unfiltered posts state
      setOriginalPost(data);

      // filtering the data whose userId equals to 1
      const filteredData = data.filter((post) => post.userId === userId);
      // updating the state of filtered data
      setPosts(filteredData);

    
    } catch (error) {
      console.log("Error in fetching data");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Data for pie chart 
  const PieChartData = [
    { key: 'Posts written by user ID 1', value: posts.length },
    { key: 'Total number of Posts', value: originalPost.length },
  ]

  return (
    <div>
      {loading ? (
        <div className="mx-auto">
          <TailSpin />
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto ">
            <table className="w-full table-auto">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">TITLE</th>
                  <th className="px-4 py-2">BODY</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2">{user.title}</td>
                    <td className="px-4 py-2">{user.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-4 justify-center py-4">
            <p className="text-xl font-bold">
              Pie Chart representing the number of posts written by user ID 1
              out of total posts.
            </p>
            <SimplePieChart data={PieChartData}  />
          </div>
        </div>
      )}
    </div>
  );
};

export default Data;
