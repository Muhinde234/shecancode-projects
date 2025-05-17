import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import recipes from '../../../data/recipes.json';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = recipes.map((r) => ({ params: { slug: r.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipe = recipes.find((r) => r.slug === params?.slug);
  return { props: { recipe } };
};

export default function RecipeDetail({ recipe }: any) {
  return (
    <div className="p-6">
      <Image src={`/images/${recipe.image}`} alt={recipe.title} width={500} height={400} className="rounded mb-4" />
      <h1 className="text-4xl font-bold">{recipe.title}</h1>
      <p className="mt-2 italic text-gray-600">🍽️ Best for: {recipe.mealTime}</p>
      <p className="mt-2 text-green-700 font-semibold">💡 Advice: {recipe.advice}</p>
      <h2 className="text-2xl mt-4 font-semibold">Ingredients</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
      </ul>
      <h2 className="text-2xl mt-4 font-semibold">Preparation Steps</h2>
      <ol className="list-decimal pl-6">
        {recipe.steps.map((step: string, idx: number) => <li key={idx}>{step}</li>)}
      </ol>
    </div>
  );
}
