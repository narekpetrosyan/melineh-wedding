"use client"

import { useState } from "react";

export default function FormPart() {
  const [form, setForm] = useState({
    name: "",
    count: 1,
    wish: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (form.wish.length > 100) {
      newErrors.wish = "Wish must be at maximum 100 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      console.log(JSON.stringify(form));


      const res = await fetch("/api/guests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        return;
      }

      setForm({ name: "", count: 1, wish: "" });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-8">
        <div className="popup_box">
          <div className="popup_inner">
            <div className="form_heading text-center">
              <h3>Խնդրում ենք հաստատել Ձեր ներկայությունը</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-xl-12">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ձեր անունը"
                    value={form.name}
                    onChange={handleChange}
                    style={{
                      marginBottom: "8px",
                      ...(errors?.name ? {
                        borderColor: "red"
                      } : {})
                    }}
                  />
                  {errors.name && <p
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginBottom: "4px",
                      lineHeight: 1
                    }}>{errors.name}</p>}
                </div>
                <div className="col-xl-12">
                  <select
                    name="count"
                    value={form.count}
                    onChange={handleChange}
                    className="form-select wide"
                    id="default-select"
                    style={{
                      marginBottom: "8px"
                    }}
                  >
                    <option value="1">1 հյուր</option>
                    <option value="2">2 հյուր</option>
                    <option value="3">3 հյուր</option>
                    <option value="4">4 հյուր</option>
                    <option value="5">5 հյուր</option>
                  </select>
                </div>
                <div className="col-xl-12">
                  <textarea
                    name="wish"
                    value={form.wish}
                    onChange={handleChange}
                    placeholder="Բարեմաղթանք"
                    style={{
                      marginBottom: "8px",
                      ...(errors?.wish ? {
                        borderColor: "red"
                      } : {})
                    }}
                  />
                  {errors.name && <p style={{
                    fontSize: 12,
                    color: "red",
                    marginBottom: "4px",
                    lineHeight: 1
                  }}>{errors.wish}</p>}
                </div>
                <div className="col-xl-12">
                  <button type="submit" className="boxed_btn3" disabled={loading}>
                    {loading ? "Sending..." : "Հաստատել"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
