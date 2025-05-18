import { GetStaticProps } from 'next';
import { Recipe } from '../types/recipe';
import dynamic from 'next/dynamic';

const AddRecipeForm = dynamic(
  () => import('./addform'),
  { ssr: false }
);

interface AddRecipePageProps {
  defaultRecipe: Omit<Recipe, 'id'>;
}

export const getStaticProps: GetStaticProps<AddRecipePageProps> = async () => {
  return {
    props: {
      defaultRecipe: {
        title: '',
        slug: '',
        image: '',
        description: '',
        ingredients: [],
        steps: [],
        prepTime: 0,
        cookTime: 0,
        nutrition: {
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0
        },
        tags: []
      }
    }
  };
};

export default function AddRecipePage({ defaultRecipe }: AddRecipePageProps) {
  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      <AddRecipeForm defaultRecipe={defaultRecipe} />
    </div>
  );
}