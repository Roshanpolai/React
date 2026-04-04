import React from 'react'

function UserCard({ name, role, image }) {
  return (
    <div className="border rounded-xl p-4 w-60 shadow-md">
      <img 
        src={image} 
        alt="user" 
        className="w-20 h-20 rounded-full mx-auto"
      />
      
      <h2 className="text-xl font-bold text-center mt-2">
        {name}
      </h2>

      <p className="text-gray-500 text-center">
        {role}
      </p>
    </div>
  )
}

export default UserCard
