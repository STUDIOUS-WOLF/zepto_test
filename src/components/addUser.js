import React, { useState } from "react";
import Chip from "../components/chip";
import user from "../assets/sampleImage.jpg";

const AddUser = () => {
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState([
    { name: "Amit Kumar", image: user },
    { name: "Raj kumar", image: user },
    { name: "Bob kumar", image: user },
    { name: "Rahul Patel", image: user },
  ]);

  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleInput = (e) => {
    const inputText = e.target.value.trim();
    setUserInput(inputText);

    // In a real scenario, you would fetch suggestions from a server based on inputText
    const mockSuggestions = getMockSuggestions(inputText);
    setSuggestions(mockSuggestions);
  };

  const handleSelectUser = (selectedUser) => {
    // Remove selectedUser from suggestions
    const updatedSuggestions = suggestions.filter(
      (user) => user.name !== selectedUser.name
    );

    setSelectedUsers([...selectedUsers, selectedUser]);
    setUserInput("");
    setSuggestions(updatedSuggestions);
  };

  const handleRemoveUser = (index) => {
    const removedUser = selectedUsers[index];

    // Add removedUser back to suggestions
    setSuggestions([...suggestions, removedUser]);

    const updatedUsers = [...selectedUsers];
    updatedUsers.splice(index, 1);
    setSelectedUsers(updatedUsers);
  };

  // Mock function to simulate server fetching
  const getMockSuggestions = (query) => {
    return suggestions.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="flex flex-col rounded">
      <div className="flex flex-wrap mb-4">
        {selectedUsers.map((user, index) => (
          <Chip
            key={index}
            label={user.name}
            image={user.image}
            onRemove={() => handleRemoveUser(index)}
          />
        ))}

        <div className="flex flex-col">
          <input
            type="text"
            value={userInput}
            onChange={handleInput}
            placeholder="Add user..."
            className="border-none rounded focus:outline-none"
          />
          <div className="suggestionsContainer">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion p-2 cursor-pointer hover:bg-gray-300 bg-gray-100 overflow-y-auto"
                onClick={() => handleSelectUser(suggestion)}
              >
                {suggestion.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
