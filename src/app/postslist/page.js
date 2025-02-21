import React from "react";

const posts = [
  {
    name: "FEKKAI Ahmed",
    date: "16 Aug 24",
    emergency: true,
    bloodType: "A+",
    phone: "0550 50 50 50",
    state: "Done",
  },
  {
    name: "FEKKAI Ahmed",
    date: "14 Aug 24",
    emergency: false,
    bloodType: "B-",
    phone: "0550 50 50 50",
    state: "Pending",
  },
  {
    name: "FEKKAI Ahmed",
    date: "13 Aug 24",
    emergency: false,
    bloodType: "AB-",
    phone: "0550 50 50 50",
    state: "Done",
  },
];

export default function Posts() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="border p-4 rounded-lg bg-white shadow">
            <div className="flex justify-between">
              <h3 className="font-semibold">{post.name}</h3>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
            {post.emergency && (
              <p className="text-red-600 font-bold">Emergency Call</p>
            )}
            <p className="text-gray-700">Blood Type: <span className="font-semibold">{post.bloodType}</span></p>
            <p className="text-gray-700">Phone Number: <span className="font-semibold text-red-500">{post.phone}</span></p>
            <p className="text-gray-700">State: <span className={post.state === "Done" ? "text-green-600" : "text-yellow-500"}>{post.state}</span></p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1 bg-gray-200 rounded">Edit Post</button>
              <button className="px-3 py-1 bg-red-600 text-white rounded">Delete Post</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
