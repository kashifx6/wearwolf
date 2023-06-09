"use client";
import React, { useState } from "react";
import Sidebar from "@/components/admin/sidebar";
import Link from "next/link";
import { useForm } from "react-hook-form";
import "../../productdetail/product.css";

const AddProduct = () => {
  const [productType, setProductType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProductType = (e) => {
    setProductType(e.target.value);
  };

  const onSubmit = (data) => {
    setIsSubmitting(true);
    console.log("hi", data);
    // Perform your form submission logic here
    // After completion, you can reset the form and update the button text
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      <Sidebar />
      <div className="ml-[280px] content p-3">
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          action="#"
        >
          <label
            htmlFor="countries"
            className="block mb-2 text-lg font-medium text-gray-950"
          >
            Select Product Type
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
            onChange={handleProductType}
            value={productType}
          >
            <option value="" defaultValue disabled>
              Product Type
            </option>
            <option value="cloth">Clothing</option>
            <option value="food">Food</option>
            <option value="digital">Digital || Electronics</option>
            <option value="health">Health & Beauty</option>
          </select>
          {productType === "cloth" && (
            <>
              <div>
                <label
                  htmlFor="clothbrandName"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  id="clothbrandName"
                  {...register("clothBrandName", { required: true })}
                  className={`${
                    errors.clothBrandName
                      ? "border border-red-500 bg-gray-50"
                      : ""
                  } bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:outline-none block w-full p-2.5`}
                  placeholder="Denim"
                />
                {errors.clothBrandName && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="clothProductMaterial"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Product Material
                </label>
                <input
                  type="text"
                  id="clothProductMaterial"
                  {...register("clothProductMaterial", { required: true })}
                  className={`${
                    errors.clothProductMaterial
                      ? "border border-red-500 bg-gray-50"
                      : ""
                  } bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:outline-none block w-full p-2.5`}
                  placeholder="Silk"
                />
                {errors.clothProductMaterial && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="clothProductDescription"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Description
                </label>
                <textarea
                  rows="4"
                  id="clothProductDescription"
                  {...register("clothProductDescription", { required: true })}
                  className={`${
                    errors.clothProductDescription
                      ? "border border-red-500 bg-gray-50"
                      : ""
                  } bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:outline-none block w-full p-2.5`}
                  placeholder="Enter description"
                />
                {errors.clothProductDescription && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="clothProductDescription"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Available Sizes
                </label>

                <div className="flex mb-2 sizes">
                  <input
                    type="checkbox"
                    id="clothProductSizeExtraSmall"
                    {...register("clothProductSizeExtraSmall")}
                    value="XS"
                  />
                  <label htmlFor="clothProductSizeExtraSmall">XS</label>
                  <input
                    type="checkbox"
                    id="clothProductSizeSmall"
                    {...register("clothProductSizeSmall")}
                    value="S"
                  />
                  <label className="ml-1" htmlFor="clothProductSizeSmall">
                    S
                  </label>
                  <input
                    type="checkbox"
                    id="clothProductSizeMedium"
                    {...register("clothProductSizeMedium")}
                    value="M"
                  />
                  <label className="ml-1" htmlFor="clothProductSizeMedium">
                    M
                  </label>
                  <input
                    type="checkbox"
                    id="clothProductSizeLarge"
                    {...register("clothProductSizeLarge")}
                    value="L"
                  />
                  <label className="ml-1" htmlFor="clothProductSizeLarge">
                    L
                  </label>
                  <input
                    type="checkbox"
                    id="clothProductSizeXl"
                    {...register("clothProductSizeXl")}
                    value="XL"
                  />
                  <label className="ml-1" htmlFor="clothProductSizeXl">
                    XL
                  </label>
                </div>
              </div>
              <div>
                <label
                  htmlFor="clothProductDescription"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Available Colors
                </label>

                <div className="flex mb-2 sizes">
                  <input
                    type="checkbox"
                    id="clothProductSizeExtraSmall"
                    {...register("clothProductSizeExtraSmall")}
                    value="XS"
                  />
                  <label htmlFor="clothProductSizeExtraSmall">XS</label>
                  <input
                    type="checkbox"
                    id="clothProductSizeSmall"
                    {...register("clothProductSizeSmall")}
                    value="S"
                  />
                  <label className="ml-1" htmlFor="clothProductSizeSmall">
                    S
                  </label>
                  <input
                    type="checkbox"
                    id="clothProductSizeMedium"
                    {...register("clothProductSizeMedium")}
                    value="M"
                  />
                  <label className="ml-1" htmlFor="clothProductSizeMedium">
                    M
                  </label>
                  <input
                    type="checkbox"
                    id="clothProductSizeLarge"
                    {...register("clothProductSizeLarge")}
                    value="L"
                  />
                  <label className="ml-1" htmlFor="clothProductSizeLarge">
                    L
                  </label>
                  <input
                    type="checkbox"
                    id="clothProductSizeXl"
                    {...register("clothProductSizeXl")}
                    value="XL"
                  />
                  <label className="ml-1" htmlFor="clothProductSizeXl">
                    XL
                  </label>
                </div>
              </div>
            </>
          )}

          {productType === "food" && (
            <>
              <div>
                <label
                  htmlFor="foodBrandName"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  id="foodBrandName"
                  {...register("foodBrandName", { required: true })}
                  className={`${
                    errors.foodBrandName
                      ? "border border-red-500 bg-gray-50"
                      : ""
                  } bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:outline-none block w-full p-2.5`}
                  placeholder="Enter brand name"
                />
                {errors.foodBrandName && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="foodDescription"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="foodDescription"
                  {...register("foodDescription", { required: true })}
                  className={`${
                    errors.foodDescription
                      ? "border border-red-500 bg-gray-50"
                      : ""
                  } bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:outline-none block w-full p-2.5`}
                  placeholder="Enter description"
                />
                {errors.foodDescription && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </>
          )}
          {productType && (
            <button
              type="submit"
              className={`${
                isSubmitting ? "bg-yellow-600 hover:text-white" : ""
              } w-full text-white bg-yellow-500 hover:text-gray-950 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding Product..." : "Add Product"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
