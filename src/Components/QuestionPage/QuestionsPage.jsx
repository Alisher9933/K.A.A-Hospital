import React, { useState } from "react";
import "./QuestionsPage.css";

function QuestionPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    specialties: [],
  });

  const botToken = "7379934619:AAF9VKZB-LO1SuR5Ts5p7Tk4HWk7NDkMiSY";
  const chatId = "6263073094";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => {
        const newSpecialties = checked
          ? [...prevState.specialties, value]
          : prevState.specialties.filter((specialty) => specialty !== value);

        return { ...prevState, specialties: newSpecialties };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const textMessage = `🏥 Yangi murojaat:\n👤 Ism: ${formData.name}\n📞 Tel: ${formData.phone}\n📧 Email: ${formData.email}\n📝 Xabar: ${formData.message}\n🩺 Yo‘nalishlar: ${formData.specialties.join(", ")}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: textMessage,
        }),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        alert("✅ So‘rovingiz yuborildi. Tez orada siz bilan bog‘lanamiz!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          specialties: [],
        });
      } else {
        alert("❌ Xatolik yuz berdi:\n" + result.description);
      }
    } catch (error) {
      alert("❌ Tarmoq xatoligi:\n" + error.message);
    }
  };

  return (
    <div className="hospital-form-container">
      <h2 className="hospital-form-title">Biz bilan bog‘laning</h2>
      <form onSubmit={handleSubmit} className="hospital-form">
        <input
          type="text"
          name="name"
          placeholder="Ismingiz"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefon raqamingiz"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email manzilingiz"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Xabaringizni yozing"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <div className="specialties">
          <p>Yo‘nalishlar:</p>
          <label>
            <input
              type="checkbox"
              name="specialties"
              value="Pediatriya"
              onChange={handleChange}
            />
            Tish parvarishi
          </label>
          <label>
            <input
              type="checkbox"
              name="specialties"
              value="Kardiologiya"
              onChange={handleChange}
            />
            Ko'z parvarishi
          </label>
          <label>
            <input
              type="checkbox"
              name="specialties"
              value="Nevrologiya"
              onChange={handleChange}
            />
            Nevroterapiya
          </label>
          <label>
            <input
              type="checkbox"
              name="specialties"
              value="Terapy"
              onChange={handleChange}
            />
            Kardiologiya
          </label>
        </div>

        <button type="submit">Yuborish</button>
      </form>
    </div>
  );
}

export default QuestionPage;
