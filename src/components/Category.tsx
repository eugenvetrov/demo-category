import { ICategory } from '@/types/ICategory';

interface CategoryProps {
    category: ICategory
}

const CategoryComponent = ({category}: CategoryProps) => {
    console.log(category);
    
    return (
        <div>{category.name}</div>
    )
}

export default CategoryComponent;