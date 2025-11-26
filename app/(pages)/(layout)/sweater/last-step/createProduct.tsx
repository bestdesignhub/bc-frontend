
'use client'
import MeasurementAddToCartButton from '@/app/components/measurements/add-to-cart-button';
import userAxiosInstance from '@/config/userAxiosInstance';
import { MESSAGES } from '@/constants';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const CreateProduct = (props: any) => {
    const {
        stepData,
        // currentStepData,
        // filteredAvailableSizes,
        // yarn,
        gauge,
        pattern,
        style,
        // userMeasurementBySlug,
        // userMeasurementActiveList,
        // measurementProfile,
        productTypeId,
        // fittingName,
        steps,
        fittingId,
        // measurementProfiles,
        defaultFittingSize,
        price,
        size
    } = props?.data;

    // To print all the data
    // console.log("📝 Full Data Passed from Parent Component (LastStepPage):", props?.data);
    const [isSubmitting, setIsSubmitting] = useState(true);

    const [newProductId, setNewProductId] = useState<string | null>(null);

    console.log(isSubmitting);






    const handleSubmit = async (event?: React.FormEvent) => {

        event?.preventDefault();

        // const formData = new FormData();

        // stepData?.steps?.map((e: any) => {
        //     console.log(e.slug);
        //     const currentStepData = stepData?.[e?.slug] || {};
        //     if (e?.slug == 'style') {
        //         formData.append('title', JSON.stringify({ en: currentStepData?.stepCard?.title, da: currentStepData?.stepCard?.title }))
        //         console.log('currentStepData ', currentStepData)
        //     }



        // })

        // // Map through each step and populate the formData
        // stepData.steps.forEach((step: any, index: number) => {
        //     // Get the slug from the step
        //     const slug = step.slug;

        //     // Dynamically fetch the stepType and stepCard from stepData using the slug
        //     const stepTypeId = stepData[slug]?.stepType?._id;
        //     const stepCardId = stepData[slug]?.stepCard?._id;

        //     // Append to formData in the required format
        //     formData.append(`steps[${index}][stepType]`, stepTypeId);
        //     formData.append(`steps[${index}][stepCard]`, stepCardId);

        //     // For debugging: Print the values to verify
        //     console.log(`steps[${index}][stepType] = ${stepTypeId}`);
        //     console.log(`steps[${index}][stepCard] = ${stepCardId}`);
        // });





        // formData.append('image', stepData?.yarn?.image);
        // formData.append("productTypeId", productTypeId);
        // formData.append("yarn", yarn);
        // formData.append("genderId", stepData?.yarn?.genderId);
        // // formData.append("steps", JSON.stringify(stepData?.steps));

        // formData.append("patternId", pattern);
        // formData.append("gaugeId", gauge);
        // formData.append("styleId", style);
        // formData.append("colourId", stepData?.yarn?.colourId);
        // formData.append("materialId", stepData?.yarn?.materialId);
        // formData.append("basePriceXs", stepData?.yarn?.price);
        // // formData.append("basePriceXs", String(Number(stepData?.yarn?.price)));
        // formData.set("basePriceXs", `${stepData?.yarn?.price}`);

        // console.log(formData);

        // const payload: {
        //     title: string;
        //     steps: Array<Record<string, any>>;
        //     image: string | undefined;
        //     productTypeId: string | undefined;
        //     yarn: any;
        //     genderId: string | undefined;
        //     patternId: string | undefined;
        //     gaugeId: string | undefined;
        //     styleId: string | undefined;
        //     colourId: string | undefined;
        //     materialId: string | undefined;
        //     basePriceXs: string | undefined;
        // } = {
        //     title: "",
        //     steps: [],
        //     image: stepData?.yarn?.image,
        //     productTypeId: productTypeId,
        //     yarn: yarn,
        //     genderId: stepData?.yarn?.genderId,
        //     patternId: pattern,
        //     gaugeId: gauge,
        //     styleId: style,
        //     colourId: stepData?.yarn?.colourId,
        //     materialId: stepData?.yarn?.materialId,
        //     basePriceXs: `${stepData?.yarn?.price}`,
        // };

        // // Set the title field in multiple languages
        // stepData?.steps?.map((e: any, index: number) => {
        //     const currentStepData = stepData?.[e?.slug] || {};
        //     if (e?.slug === 'style') {
        //         payload.title = JSON.stringify({ en: currentStepData?.stepCard?.title, da: currentStepData?.stepCard?.title });
        //         const stepTypeId = stepData[e?.slug]?.stepType?._id;
        //         const stepCardId = stepData[e?.slug]?.stepCard?._id;

        //         // Ensure stepTypeId and stepCardId exist before adding to steps
        //         if (stepTypeId && stepCardId) {
        //             payload.steps.push({
        //                 [`steps[${index}][stepType]`]: stepTypeId,
        //                 [`steps[${index}][stepCard]`]: stepCardId,
        //             });
        //         } else {
        //             console.error(`Missing stepType or stepCard for step ${e?.slug}`);
        //         }
        //     }
        // });

        // // Map through each step and populate the 'steps' array in the payload
        // stepData.steps.forEach((step: any, index: number) => {
        //     const slug = step.slug;

        //     // Dynamically fetch the stepType and stepCard from stepData using the slug
        //     const stepTypeId = stepData[slug]?.stepType?._id;
        //     const stepCardId = stepData[slug]?.stepCard?._id;

        //     // Ensure stepTypeId and stepCardId exist before adding to steps
        //     if (stepTypeId && stepCardId) {
        //         payload.steps.push({
        //             [`steps[${index}][stepType]`]: stepTypeId,
        //             [`steps[${index}][stepCard]`]: stepCardId,
        //         });
        //     } else {
        //         console.error(`Missing stepType or stepCard for step ${slug}`);
        //     }

        //     // For debugging: Print the values to verify
        //     console.log(`steps[${index}][stepType] = ${stepTypeId}`);
        //     console.log(`steps[${index}][stepCard] = ${stepCardId}`);
        // });

        const payload = {
            title: "", // Example title
            images: stepData?.yarn?.image, // Optional, image data
            // contents: [
            //     {
            //         title: "Content Title", // Optional content title
            //         description: "Content Description" // Optional content description
            //     }
            // ],
            yarn: stepData?.yarn?._id, // Required, should be a 24-character hex string
            steps: stepData.steps.map((step: any) => ({
                stepType: stepData[step.slug]?.stepType?._id, // Required, 24-character hex string
                stepCard: stepData[step.slug]?.stepCard?._id // Required, 24-character hex string
            })),
            relatedProducts: [], // Optional, related product data can go here
            productTypeId: productTypeId, // Required, should be a 24-character hex string
            // status: "active", // Example status (you can use `statusJoiValidation` to define this)
            genderId: stepData?.yarn?.genderId, // Optional genderId
            basePriceXs: stepData?.yarn?.price, // Required price for the product
            updatedPrice: stepData?.yarn?.price, // Required price for the product
            colourId: stepData?.yarn?.colourId, // Required, 24-character hex string
            materialId: stepData?.yarn?.materialId, // Required, 24-character hex string
            patternId: pattern, // Required, 24-character hex string
            gaugeId: gauge, // Required, 24-character hex string
            styleId: style,// Required, 24-character hex string
            createdBy: "user"
        };

        stepData?.steps?.map((e: any, index: number) => {

            const currentStepData = stepData?.[e?.slug] || {};
            if (e?.slug === 'style') {
                payload.title = JSON.stringify({ en: currentStepData?.stepCard?.title, da: currentStepData?.stepCard?.title });
                payload.images = currentStepData?.stepCard?.realImage;
                // const stepTypeId = stepData[e?.slug]?.stepType?._id;
                // const stepCardId = stepData[e?.slug]?.stepCard?._id;
                console.log(index);

                // Ensure stepTypeId and stepCardId exist before adding to steps
                // if (stepTypeId && stepCardId) {
                //     payload.steps.push({
                //         [`steps[${index}][stepType]`]: stepTypeId,
                //         [`steps[${index}][stepCard]`]: stepCardId,
                //     });
                // } else {
                //     console.error(`Missing stepType or stepCard for step ${e?.slug}`);
                // }
            }
        });
        // Ensure the payload is correctly formed before sending


        // Convert the payload to JSON
        // const jsonPayload = JSON.stringify(payload);


        setIsSubmitting(true);

        try {
            dispatch(setLoading(true));
            //         const response = await userAxiosInstance.post(MY_ADDRESS_LIST_URL);
            //         if (response?.data?.success) {
            //             // if (!selectedAddress) {
            //             // onSelect?.(response?.data?.data?.[0] ?? '');
            //             // }
            //             // setAddresses(response.data.data);
            //         }

            //     if (!response.ok) {
            //         throw new Error('Failed to save product');
            //     }

            //     alert('Product saved successfully!');
            //     setTitle('');
            //     setImage(null);
            // } catch (error) {
            //     console.error(error);
            //     alert('Error saving product');
            // } finally {
            //     setIsSubmitting(false);
            // }



            const response = await userAxiosInstance({
                url: "/product-template/addbyuser",
                method: 'POST',
                data: payload,
            });

            if (response.data.success) {
                // toast.success('SUCCESS');
                console.log(response.data.data);

                // ✅ Get the new productId from the response
                const newProductId = response.data.data._id;
                setNewProductId(newProductId);

                // if (newProductId) {
                //     // ✅ Set search params to include the new product ID
                //     const currentParams = new URLSearchParams(searchParams.toString());
                //     currentParams.set('product', newProductId);

                //     // ✅ Update the URL with the new search params
                //     router.push(`?${currentParams.toString()}`);
                // }

            }
        } catch (error) {
            console.error(error);
            toast.error((MESSAGES.SOMETHING_WENT_WRONG));
        } finally {
            // setDisableSubmit(false);
            dispatch(setLoading(false));
        }
    };

    return (
        // <form onSubmit={handleSubmit} className="space-y-4">
        //     <button
        //         type="submit"
        //         className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white  bg-[#7f7263]-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        //     >
        //         Save
        //     </button>

        // </form>
        // <div className="size-buttons">
        //     <button
        //         key={1}
        //         className="save-button"
        //         onClick={(e) => handleSubmit(e)}
        //     >
        //         Save
        //     </button>

        // </div>

        <div className="size-buttons">
            {/* Save Button */}
            {!newProductId && (
                // <button
                //     className="save-button"
                //     onClick={handleSubmit}

                // >
                //     {'Add TO Cart'}
                // </button>

                <div className="login-link-sub" onClick={handleSubmit}>
                    <Link className="cartbtn" href="#">{'Add TO Cart'}</Link>
                </div>

            )}



            {/*  Render Add-To-Cart Component After Success */}
            {newProductId && (
                <MeasurementAddToCartButton
                    steps={steps}
                    productId={newProductId}
                    fittingId={fittingId}
                    productTypeId={productTypeId}
                    defaultFittingSize={defaultFittingSize}
                    price={price}
                    size={size}
                    openOnLoad={true}
                />
            )}


        </div>
    );
};

export default CreateProduct;

