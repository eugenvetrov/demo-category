import { useEffect } from 'react';
import styles from './styles.module.scss';
import { RouterProvider } from "react-router-dom";
import router from '@/pages/router';
import { fetchCategories, selectCategories } from '@/features/categorySlice';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { RootState } from '../stores/rootStore';

export const App = () => {

  const categories = useAppSelector((state: RootState) =>
    selectCategories(state)
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories())
    }
  }, [categories, dispatch])

  return (
    <div className={ styles.main }>
      <RouterProvider router={router} />
    </div>
  )
}
