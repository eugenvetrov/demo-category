import Category from "@/components/Category";
import { selectCategories } from "@/features/categorySlice";
import { useAppSelector } from "@/hooks/storeHooks";
import { RootState } from "@/stores/rootStore";

const HomePage = () => {
    const categories = useAppSelector((state: RootState) =>
        selectCategories(state)
    )

    return (
        <div>{categories.map((category) => (<Category category={category} key={category.id}/>))}</div>
    )
}

export default HomePage;