import { URL_SLUG } from '@/constants';
import {
  ADD_TO_CART_LIST_URL,
  COUNTRY_LIST_API,
  DEFAULT_PRODUCT_TYPE_URL,
  FLASH_SALE_URL,
  GENDER_DROPDOWN_URL,
  GENERAL_USER_SETTINGS_URL,
  GET_AVAIALBLE_SIZES,
  GET_BANNER_URL,
  GET_FETCH_URL,
  GET_HOME_DATA,
  GET_HOME_STORIES,
  GET_SETTINNG_URL,
  GET_TESTIMONIAL_URL,
  GET_USER_ORDERS,
  HOME_MODEL_URL,
  MEASUREMENT_PROFILE_GET_URL,
  MEASUREMENT_PROFILE_OPTIONS,
  MY_ADDRESS_LIST_URL,
  PRODUCT_DETAILS_URL,
  PRODUCT_LISTING,
  PROFILE_API_URL,
  STEP_CARD_DETAILS,
  STEP_TYPE_DETAILS_URL,
  STEP_TYPE_DROPDOWN_URL,
  STEP_TYPE_FULL_VIEW_URL,
  STORY_DETAILS_URL,
  STORY_LIST_URL,
  USER_MEASUREMENT_ACTIVE,
  USER_MEASUREMENT_SLUG_URL,
  WISHLIST_LIST_URL,
  YARN_CARD_LIST_URL,
} from '@/constants/apis';
import { handleApiCall } from './common.utils';
import { getUserData, getUserToken } from '@/config/locale';

export const getCountryList = async () => {
  const res: any = await handleApiCall(COUNTRY_LIST_API, 'GET', null);
  const filteredRes = res?.data?.map((country: any) => ({
    value: country?._id,
    label: `${country?.phoneCode}`,
    image: `${country?.flag}`,
  }));

  return filteredRes;
};

export const getCountryNameList = async () => {
  const res: any = await handleApiCall(COUNTRY_LIST_API, 'GET', null);
  const filteredRes = res?.data?.map((country: any) => ({
    value: country?._id,
    label: `${country?.name}`,
    image: `${country?.flag}`,
  }));

  return filteredRes;
};

export const getHomePageData = async () => {
  const res: any = await handleApiCall(GET_HOME_DATA, 'GET', {}, {});

  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getHomePageStoryData = async () => {
  const res: any = await handleApiCall(GET_HOME_STORIES, 'GET', {}, {});
  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getDropdownList = async (url: string, payload: any = {}) => {
  const res: any = await handleApiCall(url, 'POST', payload);

  const filteredRes =
    res?.data?.map((country: any) => ({
      value: country?.value,
      label: `${country?.label}`,
    })) ?? [];

  return filteredRes;
};

export const getYarnCardList = async (searchParams: { [key: string]: string }) => {
  const {
    _by: sortBy,
    _order: sortOrder,
    _search: search = '',
    _colour: colour,
    _gender: gender,
    _material: material,
    _page: page = 1,
  } = searchParams;

  const filterObj: Record<string, string> = {};

  if (colour && colour.length) {
    filterObj['colourId'] = colour;
  }

  if (gender && gender.length) {
    filterObj['genderId'] = gender;
  }

  if (material && material.length) {
    filterObj['materialId'] = material;
  }

  const res: any = await handleApiCall(YARN_CARD_LIST_URL, 'POST', {
    page: parseInt(page.toString()),
    perPage: 10,
    search,
    sortBy,
    sortOrder,
    filter: filterObj,
  });

  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getStepTypesList = async (value?: string) => {
  const res: any = await handleApiCall(`${STEP_TYPE_DROPDOWN_URL}/${value}`, 'POST', {});

  const filteredRes =
    res?.data?.map((country: any) => ({
      value: country?.value,
      slug: country?.slug,
      rowOrder: country?.rowOrder,
      label: `${country?.label}`,
    })) ?? [];

  return filteredRes;
};

export const getCurrentStepDetails = async ({
  nextStepSlug,
  productTypeId,
  steps = {},
}: {
  steps: any;
  productTypeId: string;
  nextStepSlug?: string;
}) => {
  const newSteps = { ...steps };
  delete newSteps?.[URL_SLUG.EDIT];
  const { yarn, change, ...restSteps } = newSteps;
  const payload = {
    steps: restSteps,
    yarn,
    productTypeId,
    nextStepSlug,
  };
  const res: any = await handleApiCall(STEP_TYPE_DETAILS_URL, 'POST', payload);

  return res.data;
};

export const getStepFullViewDetails = async ({
  productTypeId,
  steps = {},
}: {
  steps: any;
  productTypeId: string;
}) => {
  const newSteps = { ...steps };
  delete newSteps?.[URL_SLUG.EDIT];
  const { yarn, product, ...restSteps } = newSteps;
  const payload = {
    steps: restSteps,
    yarn,
    productTypeId,
    productId: product,
  };
  const res: any = await handleApiCall(STEP_TYPE_FULL_VIEW_URL, 'POST', payload);
  return res.data;
};

export const getFittingStepDetails = async ({ id }: { id: string }) => {
  const res: any = await handleApiCall(`${STEP_CARD_DETAILS}/${id}`, 'GET', {});
  return res.data;
};

export const getAvailableSizes = async () => {
  const res: any = await handleApiCall(GET_AVAIALBLE_SIZES, 'GET', {});
  return res.data;
};

export const getDefaultProductType = async () => {
  const res: any = await handleApiCall(DEFAULT_PRODUCT_TYPE_URL, 'GET', {});
  return res.data;
};

export const getProductList = async (
  searchParams: { [key: string]: string },
  genderSlug?: string
) => {
  const {
    _by: sortBy,
    _order: sortOrder,
    _search: search = '',
    _colour: colour,
    _gender: gender,
    _material: material,
    _pattern: pattern,
    _page: page = 1,
    [URL_SLUG.MIN_PRICE]: minPrice,
    [URL_SLUG.MAX_PRICE]: maxPrice,
  } = searchParams;

  const filterObj: Record<string, string> = {};

  if (colour && colour.length) {
    filterObj['colourId'] = colour;
  }

  if (gender && gender.length) {
    filterObj['genderId'] = gender;
  }

  if (material && material.length) {
    filterObj['materialId'] = material;
  }

  if (pattern && pattern.length) {
    filterObj['patternId'] = pattern;
  }

  if (genderSlug && genderSlug.length) {
    filterObj['genderSlug'] = genderSlug;
  }

  if (minPrice) {
    filterObj['minPrice'] = minPrice;
  }

  if (maxPrice) {
    filterObj['maxPrice'] = maxPrice;
  }

  const res: any = await handleApiCall(PRODUCT_LISTING, 'POST', {
    page: parseInt(page.toString()),
    perPage: 10,
    search,
    sortBy,
    sortOrder,
    filter: filterObj,
  });

  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getGenderList = async () => {
  const res: any = await handleApiCall(GENDER_DROPDOWN_URL, 'POST', null);

  const filteredGenderList = res?.data?.map((gender: { value: string; label: string }) => ({
    value: gender?.value,
    label: gender?.label,
  }));

  return filteredGenderList;
};

export const getProductDetails = async (id: string) => {
  const user = await getUserData();
  const res: any = await handleApiCall(`${PRODUCT_DETAILS_URL}/${id}`, 'POST', {
    userId: user?._id,
  });
  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getHomeProductList = async () => {
  const res: any = await handleApiCall(PRODUCT_LISTING, 'POST', {
    page: 1,
    perPage: 6,
    filter: {},
  });
  if (res.code === 200) {
    return res?.data?.data;
  } else {
    return [];
  }
};

export const getStoryPageList = async (page = 1) => {
  const res: any = await handleApiCall(
    STORY_LIST_URL,
    'POST',
    {
      page,
      perPage: 12,
      search: '',
      filter: {
        status: true,
      },
    },
    {}
  );

  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const fetchStoryById = async (id: string) => {
  const res: any = await handleApiCall(`${STORY_DETAILS_URL}/${id}`, 'GET', {}, {});

  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getCartDetails = async () => {
  const res: any = await handleApiCall(ADD_TO_CART_LIST_URL, 'GET', {});

  if (res.code === 200) {
    return res?.data;
  } else {
    return [];
  }
};

export const getMyAddresses = async () => {
  const res: any = await handleApiCall(MY_ADDRESS_LIST_URL, 'POST', {});

  if (res.code === 200) {
    return res?.data;
  } else {
    return [];
  }
};

export const getUserSettingsDetails = async () => {
  const token = await getUserToken();
  if (token) {
    const res: any = await handleApiCall(
      GENERAL_USER_SETTINGS_URL,
      'GET',
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (res.code === 200) {
      return res?.data;
    } else {
      return {};
    }
  } else {
    return {};
  }
};

export const getUserProfileData = async () => {
  const res: any = await handleApiCall(PROFILE_API_URL, 'GET', {});

  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getWishlistData = async ({ resolvedSearchParams }: { resolvedSearchParams: any }) => {
  const { _page: page = 1 } = resolvedSearchParams;
  const res: any = await handleApiCall(WISHLIST_LIST_URL, 'POST', {
    page: parseInt(page.toString()),
    perPage: 10,
    search: '',
  });

  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getTestimonials = async () => {
  const res: any = await handleApiCall(
    GET_TESTIMONIAL_URL,
    'POST',
    {
      page: 1,
      perPage: 3,
      search: '',
    },
    {}
  );

  if (res.code === 200) {
    return res?.data?.data;
  } else {
    return {};
  }
};

export const getWebSiteSettings = async () => {
  const res: any = await handleApiCall(GET_SETTINNG_URL, 'GET', {}, {});

  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getFlashSaleBySlug = async (slug: string) => {
  const res: any = await handleApiCall(FLASH_SALE_URL, 'GET', { slug }, {});

  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getBannerBySlug = async (slug: string) => {
  const res: any = await handleApiCall(GET_BANNER_URL, 'GET', { slug }, {});
  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getFaqBySlug = async (slug: string) => {
  const res: any = await handleApiCall(GET_FETCH_URL, 'GET', { slug }, {});
  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getUserOrders = async (searchParams: { [key: string]: string }) => {
  const { _page: page = 1 } = searchParams;
  const res: any = await handleApiCall(GET_USER_ORDERS, 'POST', {
    page: parseInt(page.toString()),
    perPage: 10,
  });
  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getHomeModelBySlug = async (slug: string) => {
  const res: any = await handleApiCall(HOME_MODEL_URL, 'GET', { slug }, {});
  if (res.code === 200) {
    return res?.data;
  } else {
    return null;
  }
};

export const getMeasurementProfiles = async () => {
  const res: any = await handleApiCall(MEASUREMENT_PROFILE_OPTIONS, 'POST', {});
  if (res.code === 200) {
    return res?.data;
  } else {
    return [];
  }
};

export const getMeasurementProfileById = async (id: string) => {
  const res: any = await handleApiCall(`${MEASUREMENT_PROFILE_GET_URL}/${id}`, 'GET', {});
  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getUserMeasurementActive = async () => {
  const res: any = await handleApiCall(USER_MEASUREMENT_ACTIVE, 'GET', {});
  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getUserMeasurementBySlug = async () => {
  const res: any = await handleApiCall(USER_MEASUREMENT_SLUG_URL, 'GET', {});
  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};
