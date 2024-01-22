import React, { useState } from 'react';

interface ProfileSectionProps {
  name: string;
  email: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name, email }) => {
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedEmail(event.target.value);
  };

  const handleSave = () => {
    // Save the edited name and email to the server
    // You can make an API call here to update the user's profile information
    console.log('Saving profile changes:', editedName, editedEmail);
  };

  return (
    <div>
      <h2>Profile Section</h2>
      <label>
        Name:
        <input type='text' value={editedName} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type='email' value={editedEmail} onChange={handleEmailChange} />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProfileSection;
