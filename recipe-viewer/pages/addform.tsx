'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Recipe } from '../types/recipe';

interface AddRecipeFormProps {
  defaultRecipe: Omit<Recipe, 'id'>;
}

export default function AddRecipeForm({ defaultRecipe }: AddRecipeFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<Omit<Recipe, 'id'>>(defaultRecipe);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (!form.title || !form.slug || form.ingredients.length === 0 || form.steps.length === 0) {
        throw new Error('Please fill all required fields');
      }

      let existingRecipes: Recipe[] = [];
      if (typeof window !== 'undefined') {
        const storedRecipes = localStorage.getItem('recipes');
        existingRecipes = storedRecipes ? JSON.parse(storedRecipes) : [];
      }

      const newRecipe: Recipe = {
        ...form,
        id: existingRecipes.length > 0 
          ? Math.max(...existingRecipes.map(r => r.id)) + 1 
          : 1
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem(
          'recipes', 
          JSON.stringify([...existingRecipes, newRecipe])
        );
      }

      router.push('/');
      router.refresh();

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save recipe');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleNutritionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      nutrition: {
        ...prev.nutrition,
        [name]: Number(value)
      }
    }));
  };

  const handleArrayInput = (field: 'ingredients' | 'steps' | 'tags', value: string) => {
    const items = value.split('\n')
      .map(item => item.trim())
      .filter(item => item !== '');
    setForm(prev => ({ ...prev, [field]: items }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: Number(value) }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setForm(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Recipe</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
      
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Recipe Image</label>
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <div 
            onClick={triggerFileInput}
            className="border-2 border-dashed border-green-200 rounded-lg p-6 text-center cursor-pointer hover:bg-green-50 transition"
          >
            {imagePreview ? (
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="mx-auto h-48 object-cover rounded-md"
              />
            ) : (
              <div className="space-y-2">
                <svg className="mx-auto h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-600">Click to upload an image</p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
              </div>
            )}
          </div>
        </div>

      
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
            URL Slug *
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={form.slug}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

       
        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700">
              Prep Time (minutes)
            </label>
            <input
              type="number"
              id="prepTime"
              name="prepTime"
              value={form.prepTime}
              onChange={handleTimeChange}
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700">
              Cook Time (minutes)
            </label>
            <input
              type="number"
              id="cookTime"
              name="cookTime"
              value={form.cookTime}
              onChange={handleTimeChange}
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>


        <div className="space-y-2">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (one per line) *
          </label>
          <textarea
            id="ingredients"
            value={form.ingredients.join('\n')}
            onChange={(e) => handleArrayInput('ingredients', e.target.value)}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>


        <div className="space-y-2">
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Instructions (one step per line) *
          </label>
          <textarea
            id="steps"
            value={form.steps.join('\n')}
            onChange={(e) => handleArrayInput('steps', e.target.value)}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

       
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Nutrition Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="calories" className="block text-sm font-medium text-gray-700">
                Calories (kcal)
              </label>
              <input
                type="number"
                id="calories"
                name="calories"
                value={form.nutrition.calories}
                onChange={handleNutritionChange}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="protein" className="block text-sm font-medium text-gray-700">
                Protein (g)
              </label>
              <input
                type="number"
                id="protein"
                name="protein"
                value={form.nutrition.protein}
                onChange={handleNutritionChange}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="carbs" className="block text-sm font-medium text-gray-700">
                Carbohydrates (g)
              </label>
              <input
                type="number"
                id="carbs"
                name="carbs"
                value={form.nutrition.carbs}
                onChange={handleNutritionChange}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="fat" className="block text-sm font-medium text-gray-700">
                Fat (g)
              </label>
              <input
                type="number"
                id="fat"
                name="fat"
                value={form.nutrition.fat}
                onChange={handleNutritionChange}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
            Tags (one per line)
          </label>
          <textarea
            id="tags"
            value={form.tags?.join('\n') || ''}
            onChange={(e) => handleArrayInput('tags', e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-[#4CAF50] hover:bg-[#3e8e41] text-white px-8 py-3 rounded-full font-medium transition flex items-center justify-center gap-2 w-full md:w-auto"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : 'Save Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
}