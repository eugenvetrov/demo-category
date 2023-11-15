import { useEffect } from 'react';
import styles from './styles.module.scss';
import { RouterProvider } from "react-router-dom";
import router from '@/pages/router';
import { fetchCategories } from '@/features/categorySlice';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';

export const App = () => {
  const categories = useAppSelector((state) => state.categories)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCategories);
    console.log(categories);
  }, [dispatch, categories])

  return (
    <div className={ styles.main }>
      <RouterProvider router={router} />
    </div>
  )
}
