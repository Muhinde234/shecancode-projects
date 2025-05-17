import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddRecipe() {
  const [form, setForm] = useState({
    title: '',
    slug: '',
    image: '',
    ingredients: '',
    steps: '',
    mealTime: '',
    advice: ''
  });

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#F8F5F2] p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-serif font-bold text-[#213D34] mb-6">➕ Add New Recipe</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2C3E50]/80 mb-1">Recipe Title</label>
            <input
              name="title"
              value={form.title}
              onChange={(e) => setForm({...form, title: e.target.value})}
              className="w-full p-2 border border-[#D4A762]/30 rounded"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#2C3E50]/80 mb-1">Slug</label>
              <input
                name="slug"
                value={form.slug}
                onChange={(e) => setForm({...form, slug: e.target.value})}
                className="w-full p-2 border border-[#D4A762]/30 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2C3E50]/80 mb-1">Meal Time</label>
              <input
                name="mealTime"
                value={form.mealTime}
                onChange={(e) => setForm({...form, mealTime: e.target.value})}
                className="w-full p-2 border border-[#D4A762]/30 rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C3E50]/80 mb-1">Ingredients (comma separated)</label>
            <textarea
              name="ingredients"
              value={form.ingredients}
              onChange={(e) => setForm({...form, ingredients: e.target.value})}
              className="w-full p-2 border border-[#D4A762]/30 rounded h-24"
              required
            />
          </div>

          <button 
            type="submit" 
            className="bg-[#213D34] text-white px-6 py-2 rounded-full hover:bg-[#1A3028] transition"
          >
            Save Recipe
          </button>
        </form>
      </div>
    </div>
  );
}