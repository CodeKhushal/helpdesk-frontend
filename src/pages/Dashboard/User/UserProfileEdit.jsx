import React, { useState } from "react";
import "./styles/UserProfileEdit.css";
import Heading from "../../../components/ui/Heading";

const EditAccount = () => {
  const [formData, setFormData] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    email: "",
    realName: "",
    accessLevel: "",
    projectAccessLevel: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated:", formData);
    // Call update API here
  };

  return (
    <>
      <Heading value={"User Profile"} />
      <form className="edit-account-form" onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th className="edit-header">Edit Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="label">Username</td>
              <td>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="label">Current Password</td>
              <td>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="label">New Password</td>
              <td>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="label">Confirm Password</td>
              <td>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="label">Email</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="label">Real Name</td>
              <td>
                <input
                  type="text"
                  name="realName"
                  value={formData.realName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="label">Access Level</td>
              <td>
                <input
                  type="text"
                  name="accessLevel"
                  value={formData.accessLevel}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="label">Project Access Level</td>
              <td>
                <input
                  type="text"
                  name="projectAccessLevel"
                  value={formData.projectAccessLevel}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="submit-cell">
                <button type="submit" className="submit-btn">
                  Update User
                </button>
              </td>
              <td
                className="submit-cell"
                style={{ borderLeft: "1px solid white" }}
              ></td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default EditAccount;
