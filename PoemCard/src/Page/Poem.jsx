import { useState } from "react";

export function Poem() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    favColor: "",
    hobby: "",
    petName: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every(
      (field) => field.trim() !== ""
    );

    if (!isFormValid) {
      alert("Please fill all the form fields");
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
    }
  };

  const renderPoem = () => {
    if (!isSubmitted) {
      return (
        <div className="text-center py-8 ">
          <p className="text-gray-500 italic">
            Fill in the form below to reveal your personalized poem...
          </p>
        </div>
      );
    }

    return (
      <div className="bg-gradient-to-br from-blue-400 to-purple-400 shadow-xl p-6 rounded-lg  mb-8">
        <h3 className="text-xl font-semibold text-purple-800 mb-4">
          Your Personalized Poem
        </h3>
        <div className="space-y-4 text-gray-700">
          <p>
            In the land of {formData.address} where the sky is{" "}
            {formData.favColor},
          </p>
          <p>
            Lived {formData.firstName} {formData.lastName}, who loved{" "}
            {formData.hobby} so much.
          </p>
          <p>With their pet {formData.petName} always nearby,</p>
          <p>They laughed and played as the sun went down.</p>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-2">
          Poem Project{" "}
        </h1>
        <p className="text-gray-600">
          Create your personalized poem by filling out the form below
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="order-2 md:order-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address (City/Town)
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Where you live"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="favColor"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Favorite Color
                </label>
                <input
                  type="text"
                  id="favColor"
                  name="favColor"
                  value={formData.favColor}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your favorite color"
                />
              </div>
              <div>
                <label
                  htmlFor="hobby"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Hobby
                </label>
                <input
                  type="text"
                  id="hobby"
                  name="hobby"
                  value={formData.hobby}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your favorite activity"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="petName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pet Name
              </label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your pet's name"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
            >
              Generate My Poem
            </button>
          </form>
        </div>

        <div className="order-1 md:order-2">{renderPoem()}</div>
      </div>
    </div>
  );
}
