import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Recipe } from '../types/recipe';
import { useEffect, useState } from 'react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

interface HomeProps {
  initialRecipes: Recipe[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const initialRecipes = require('../data/recipes.json');
    return {
      props: {
        initialRecipes: initialRecipes || [],
      },
    };
  } catch (error) {
    console.error('Error loading recipes:', error);
    return {
      props: {
        initialRecipes: [],
      },
    };
  }
};

export default function App({ initialRecipes }: HomeProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      try {
        setRecipes(JSON.parse(storedRecipes));
      } catch (e) {
        console.error('Error parsing stored recipes:', e);
        setRecipes(initialRecipes || []);
      }
    } else {
      setRecipes(initialRecipes || []);
    }
  }, [initialRecipes]);

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
    
      <SignedIn>
        <div className="bg-[#213D34] text-white py-12 px-6">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Chef's Master Recipes</h1>
              <p className="text-xl md:text-2xl font-serif opacity-90">Discover & share culinary creations</p>
            </div>
         
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif font-semibold text-[#213D34]">Featured Recipes</h2>
          
          </div>

  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((recipe) => (
                <Link
                  href={`/recipes/${recipe.slug}`}
                  key={recipe.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <div className="relative h-50 ">
                    <img
                      src={`/images/${recipe.image}`}
                      alt={recipe.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h2 className="text-xl font-serif font-semibold text-white">{recipe.title}</h2>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#2C3E50]/80 mb-3 line-clamp-2">{recipe.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {recipe.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-[#D4A762]/20 text-[#D4A762] text-xs rounded-full capitalize"
                          >
                            {tag.replace('-', ' ')}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-[#2C3E50]/60">
                        {recipe.prepTime + recipe.cookTime} min
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
        
        </div>
      </SignedIn>
      <SignedOut>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#F8F5F2]">
          <h2 className="text-3xl font-serif text-[#213D34] mb-4">Welcome to Chef's Master Recipes</h2>
          <p className="text-lg mb-6 text-[#2C3E50]">Please sign in or sign up to view the recipes.</p>
          <div className="flex gap-4">
            <SignInButton mode="modal">
              <button className="bg-[#213D34] text-white px-6 py-2 rounded-full hover:bg-[#1b312b] transition">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-[#D4A762] text-white px-6 py-2 rounded-full hover:bg-[#C29552] transition">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </div>
      </SignedOut>
    </div>
  );
}
