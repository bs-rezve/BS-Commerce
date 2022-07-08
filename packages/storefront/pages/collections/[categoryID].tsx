import { useEffect } from 'react';
import { useAppDispatch } from 'customHooks/hooks';
import { storeCategorizedProduct } from 'toolkit/ProductsSlice';
import type { GetServerSideProps, NextPage } from 'next';

import { userAPI } from 'APIs';
import { Product } from 'models';

import CategoryPageComponent from '@/components/cateoryProducts';

// var cookie = require('cookie');

interface SingleProduct {
  products: Product[];
  // name: string;
  // id: string;
}

const CategoryProductsPage: NextPage<SingleProduct> = ({
  products,
  // name,
  // id,
}) => {
  const dispatch = useAppDispatch();

  const handleCartItemDelete = async () => {
    dispatch(storeCategorizedProduct(products));
  };
  useEffect(() => {
    handleCartItemDelete();
  });
  return (
    <>
      {/* {console.log(products, name, id)} */}
      <CategoryPageComponent categoryName={'have to pass name'} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cID = context?.params?.categoryId!;
  const name = context?.params?.name!;

  // console.log('--------------------------', name, cID);

  const res = await userAPI.getPublicProductByCategoryId(cID);
  return {
    props: {
      products: res,
      // name: name ? name : 'no name',
      // id: cID,
    },
  };
};

export default CategoryProductsPage;
