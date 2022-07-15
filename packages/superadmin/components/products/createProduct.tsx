import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';
import { useEffect, useState } from 'react';

import { userAPI } from '@/APIs';
import { CreateProductRequest } from 'models';
import MetaForm from '@/components/products/forms/metaForm';
import PhotosForm from '@/components/products/forms/photosForm';
import CategoryForm from '@/components/products/forms/categoryForm';
import ProductInfoForm from '@/components/products/forms/productInfoForm';
import { productSchema } from '@/components/products/schema/productSchema/index';

const CreateProduct: NextComponentType = () => {
  const router = useRouter();
  const [categogiesData, setCategoryData] = useState([]);

  const handleSubmit = (data: CreateProductRequest) => {
    if (data?.categories[0]) {
      userAPI.createProduct(data, router);
    } else toast.error('You must select atleast one category');
  };

  useEffect(() => {
    async function loadCategories() {
      const response = await userAPI.getCategoryList();
      if (response?.data.categories.length! > 0) {
        const categories: any = [];
        response?.data.categories.forEach((category, index) => {
          categories.push({
            id: index + 1,
            value: category.name,
            isSelected: false,
            isFeatured: false,
            displayOrder: 0,
          });
        });
        setCategoryData(categories);
      }
    }
    loadCategories();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          productName: '',
          ShortDescription: '',
          FullDescription: '',
          Sku: '',
          OldPrice: 0,
          Price: 0,
          ProductCost: 0,
          showOnHomePage: false,
          includeInTopMenu: false,
          allowToSelectPageSize: false,
          published: false,
          displayOrder: 1,
          isFeatured: false,
          publishDate: '',
          tags: [],
          brands: [],
          keywords: [],
          metaTitle: '',
          metaDescription: '',
          metaFriendlyPageName: '',
          photosUrl: '',
          photosID: '',
          photosTitle: '',
          displayOrderPhotos: '',
          SelectedCategoryIds: 0,
          isFeaturedCategory: false,
          displayOrderCategory: 1,
          categoriesData: '',
        }}
        onSubmit={(values, actions) => {
          const info = {
            name: values?.productName,
            shortDescription: values?.ShortDescription,
            fullDescription: values?.FullDescription,
            sku: values?.Sku,
            price: values?.Price,
            oldPrice: values?.OldPrice,
            cost: values?.ProductCost,
            showOnHomePage: values?.showOnHomePage,
            includeInTopMenu: values?.includeInTopMenu,
            allowToSelectPageSize: values?.allowToSelectPageSize,
            published: values?.published,
            displayOrder: +values?.displayOrder,
            isFeatured: values?.isFeatured,
          };
          const meta = {
            keywords: values?.keywords,
            title: values?.metaTitle,
            description: values?.metaDescription,
            friendlyPageName: values?.metaFriendlyPageName,
          };
          const photos = {
            url: values?.photosUrl,
            id: values?.photosID,
            title: values?.photosTitle,
            displayOrder: +`${values?.displayOrderPhotos}`,
            alt: 'image',
          };
          const categories: any = [];
          categogiesData?.map((category: any, index: any) => {
            category.isSelected == true
              ? categories.push({
                  id: `${category.id}`,
                  isFeatured: category.isFeatured,
                  displayOrder: +category.displayOrder,
                })
              : '';
          });

          const newData = {
            info: info,
            meta: meta,
            tags: values.tags,
            photos: [photos],
            brands: values.brands,
            categories: categories,
          };
          handleSubmit(newData);
          actions.setSubmitting(false);
        }}
        validationSchema={productSchema}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="content-header clearfix pt-4">
                <h1 className="float-start">
                  Add a new product
                  <span className="fs-5 p-3">
                    <a href="/Product" className="text-decoration-none">
                      <i className="bi bi-arrow-left-circle-fill p-2" />
                      back to product list
                    </a>
                  </span>
                </h1>
                <div className="float-end">
                  <button
                    type="submit"
                    name="save"
                    className="btn btn-primary m-1"
                  >
                    <i className="bi bi-save" />
                    <p className="float-end mx-1 my-0">Save</p>
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <ProductInfoForm />
                <MetaForm />
                <PhotosForm />
                <CategoryForm
                  setCategoryData={setCategoryData}
                  categoryData={categogiesData}
                  setFieldValue={formikprops.setFieldValue}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default CreateProduct;
