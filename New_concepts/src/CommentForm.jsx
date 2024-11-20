import { useState } from "react";

export default function CommentForm() {
  let [formData, setformData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let onChangeformData = (event) => {
    setformData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let formSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setformData({
        username: "",
        remarks: "",
        rating: 5,        
    })
  };

  return (
    <form onSubmit={formSubmit}>
      <h2>This is Comment Form</h2>
      <label htmlFor="username">Username</label>
      <br />
      <input
        id="username"
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={onChangeformData}
      />
      <br />
      <br />
      <label htmlFor="remark">Remarks</label>
      <br />
      <textarea
        name="remarks"
        id="remarks"
        placeholder="Comment"
        value={formData.remarks}
        onChange={onChangeformData}
      ></textarea>
      <br />
      <br />
      <label htmlFor="rating">Rating</label>
      <br />
      <input
        id="rating"
        type="number"
        min={0}
        max={5}
        placeholder="rating"
        value={formData.rating}
        onChange={onChangeformData}
        name="rating"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
