'use client';

import { useState } from 'react';
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

  const handleArrayInput = (field: 'ingredients' | 'steps' | 'tags', value: string) => {
    const items = value.split('\n')
      .map(item => item.trim())
      .filter(item => item !== '');
    setForm(prev => ({ ...prev, [field]: items }));
  };

  return (
    <>
     
      <form onSubmit={handleSubmit} className="space-y-6">
    
        
        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-[#D4A762] hover:bg-[#C29552] text-white px-8 py-3 rounded-full font-medium transition flex items-center justify-center gap-2 w-full md:w-auto"
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
    </>
  );
}