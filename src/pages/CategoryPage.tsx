import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const { categoryId } = useParams();
    
    return (
        <p>{ categoryId }</p>
    )
}

export default CategoryPage;