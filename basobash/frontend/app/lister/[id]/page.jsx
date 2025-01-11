"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`/api/user/${id}`);
          if (!response.ok) {
            throw new Error("User not found");
          }
          const data = await response.json();
          setUser(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      const fetchListings = async () => {
        try {
          const response = await fetch(`/api/properties?owner=${id}`);
          if (!response.ok) {
            throw new Error("Listings not found");
          }
          const data = await response.json();
          setListings(data);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchUser();
      fetchListings();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center gap-10 mt-[100px]">
      <h1 className=" text-2xl md:text-4xl font-semibold text-[#f63e3f]">
        Lister <span className="text-black">Profile</span>
      </h1>
      <div className="relative flex justify-center items-start gap-10">
        <div className=" min-w-[300px] flex flex-col gap-10 justify-start items-center profile  rounded-xl shadow-xl p-10 ">
          <img
            src="/profile.jpg"
            alt={`${user.name} Profile Image`}
            className="rounded-full object-cover w-[150px] h-[150px]"
          />
          <div>
            <p>Name: {user.name}</p>
            <p>Phone: {user.phone}</p>
            <p>Sex: {user.sex}</p>
            <p>Description: {user.description}</p>
          </div>
        </div>
        <div className="min-w-[500px] p-10 rounded-xl shadow-lg text-left">
          <h1 className=" text-xl md:text-2xl font-semibold text-[#f63e3f]">
            Listings
          </h1>
          <div className="listing-container mt-5">
            {listings.map((listing) => (
              <div key={listing._id} className="w-full p-5 ">
                <h2 className="text-xl font-semibold">{listing.title}</h2>
                <img src="/profile.jpg" alt="listing image" />
                <p>Price: ${listing.price}</p>
                <p>Description: {listing.description}</p>
                <br />
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
