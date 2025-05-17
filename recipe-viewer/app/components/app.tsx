import Link from 'next/link';
import Image from 'next/image';
import recipes from '../../data/recipes.json';

export default function App() {
  return (
    <div className="min-h-screen container mx-auto bg-[#F8F5F2] p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-[#213D34]">Chef's Master Recipes</h1>
      
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Link 
            href={`/recipe/${recipe.slug}`} 
            key={recipe.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="relative h-48">
              <Image
                src={`/images/${recipe.image}`}
                alt={recipe.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-serif font-semibold text-[#2C3E50]">{recipe.title}</h2>
              <p className="text-sm text-[#2C3E50]/80 mt-2 line-clamp-2">{recipe.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {recipe.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-[#D4A762]/20 text-[#D4A762] text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}