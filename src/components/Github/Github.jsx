import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //const [data, setData] = React.useState([]);
  const data = useLoaderData();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/pawankand")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Public Repositories: {data.public_repos}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/pawankand");
  return response.json();
};
