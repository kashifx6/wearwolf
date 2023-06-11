"use client";
import React, { useState } from "react";
import Sidebar from "@/components/admin/sidebar";
import Link from "next/link";
import { useForm } from "react-hook-form";
import isDarkColor from "is-dark-color";
import "../../productdetail/product.css";

const AddProduct = () => {
  const [productType, setProductType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [colorCount, setColorCount] = useState(1);
  const colors = watch("productColor") || [];
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
  const addNewColor = () => {
    setColorCount(colorCount + 1);
  };
  const removeColor = (index) => {
    const updatedColors = colors.filter((_, i) => i !== index);

    // Update the form value with the updated array
    setValue("productColor", updatedColors);
    setColorCount(updatedColors.length);
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
          {productType && (
            <div>
              <label
                htmlFor="productImage"
                className="block mb-2 text-sm font-medium text-gray-950"
              >
                Product Image
              </label>
              <div class="flex items-center justify-center w-full">
                <label
                  for="productImage"
                  className={`${
                    errors.productImage
                      ? "border border-dashed border-red-500"
                      : ""
                  }flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 `}
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-gray-500 text-sm">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 ">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="productImage"
                    type="file"
                    class="hidden"
                    {...register("productImage", { required: true })}
                  />
                </label>
              </div>
              {errors.productImage && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
          )}
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
                    errors.clothBrandName ? "border border-red-500" : ""
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
                    errors.clothProductMaterial ? "border border-red-500" : ""
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
                      ? "border border-red-500"
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
                  htmlFor="clothExtraFeatures"
                  className="block mb-2 text-sm font-medium text-gray-950"
                >
                  Extra Features (any four)
                </label>
                {Array.from({ length: 4 }, (_, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      id={`clothExtraFeatures-${index}`}
                      {...register(`clothExtraFeatures.${index}`, {
                        required: true,
                      })}
                      className={`${
                        errors.clothExtraFeatures &&
                        errors.clothExtraFeatures[index]
                          ? "border border-red-500"
                          : ""
                      } bg-gray-50 mb-2 border border-gray-300 text-gray-950 text-sm rounded-lg focus:outline-none block w-full p-2.5`}
                      placeholder="Denim"
                    />
                    {errors.clothExtraFeatures &&
                      errors.clothExtraFeatures[index] && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                  </div>
                ))}
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

                <div className="flex flex-wrap mb-2 sizes">
                  {Array.from({ length: colorCount }, (_, index) => (
                    <div className="relative inline-flex" key={index}>
                      <input
                        hidden
                        type="color"
                        id={`productColor-${index}`}
                        {...register(`productColor.${index}`)}
                        value={colors[index]}
                      />
                      <label
                        className="ml-1 color custom mb-2"
                        style={{
                          border:
                            colors[index] && isDarkColor(colors[index])
                              ? ""
                              : "1px solid black",
                          backgroundColor: colors[index],
                          color:
                            colors[index] && isDarkColor(colors[index])
                              ? "white"
                              : "black",
                        }}
                        htmlFor={`productColor-${index}`}
                      >
                        {colors[index] ? colors[index] : "Custom"}
                      </label>
                      <button
                        type="button"
                        onClick={() => removeColor(index)}
                        className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white flex items-center justify-center"
                      >
                        x
                      </button>
                    </div>
                  ))}
                  <input
                    type="button"
                    value="+"
                    onClick={addNewColor}
                    className="color  mx-1 rounded-lg border border-gray-250 "
                  />
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
                    errors.foodBrandName ? "border border-red-500" : ""
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
                    errors.foodDescription ? "border border-red-500" : ""
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
