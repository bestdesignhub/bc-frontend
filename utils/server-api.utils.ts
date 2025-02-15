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
import { getLocale } from 'next-intl/server';
import { handleApiCall } from './common.utils';
import { getUserData, getUserToken } from '@/config/locale';

export const getCountryList = async () => {
  const locale = await getLocale();
  const res: any = await handleApiCall(COUNTRY_LIST_API, 'GET', null, {
    'Accept-Language': locale,
  });
  const filteredRes = res?.data?.map((country: any) => ({
    value: country?._id,
    label: `${country?.phoneCode}`,
    image: `${country?.flag}`,
  }));

  return filteredRes;
};

export const getCountryNameList = async () => {
  const locale = await getLocale();
  const res: any = await handleApiCall(COUNTRY_LIST_API, 'GET', null, {
    'Accept-Language': locale,
  });
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
  const locale = await getLocale();
  const res: any = await handleApiCall(url, 'POST', payload, {
    'Accept-Language': locale,
  });

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

  const locale = await getLocale();
  const res: any = await handleApiCall(
    YARN_CARD_LIST_URL,
    'POST',
    {
      page: parseInt(page.toString()),
      perPage: 10,
      search,
      sortBy,
      sortOrder,
      filter: filterObj,
    },
    {
      'Accept-Language': locale,
    }
  );

  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getStepTypesList = async (value?: string) => {
  const locale = await getLocale();
  const res: any = await handleApiCall(
    `${STEP_TYPE_DROPDOWN_URL}/${value}`,
    'POST',
    {},
    {
      'Accept-Language': locale,
    }
  );

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
  const locale = await getLocale();
  const newSteps = { ...steps };
  delete newSteps?.[URL_SLUG.EDIT];
  const { yarn, change, ...restSteps } = newSteps;
  const payload = {
    steps: restSteps,
    yarn,
    productTypeId,
    nextStepSlug,
  };
  const res: any = await handleApiCall(STEP_TYPE_DETAILS_URL, 'POST', payload, {
    'Accept-Language': locale,
  });

  return res.data;
};

export const getStepFullViewDetails = async ({
  productTypeId,
  steps = {},
}: {
  steps: any;
  productTypeId: string;
}) => {
  const locale = await getLocale();
  const newSteps = { ...steps };
  delete newSteps?.[URL_SLUG.EDIT];
  const { yarn, product, ...restSteps } = newSteps;
  const payload = {
    steps: restSteps,
    yarn,
    productTypeId,
    productId: product,
  };
  const res: any = await handleApiCall(STEP_TYPE_FULL_VIEW_URL, 'POST', payload, {
    'Accept-Language': locale,
  });
  return res.data;
};

export const getFittingStepDetails = async ({ id }: { id: string }) => {
  const locale = await getLocale();
  const res: any = await handleApiCall(
    `${STEP_CARD_DETAILS}/${id}`,
    'GET',
    {},
    {
      'Accept-Language': locale,
    }
  );
  return res.data;
};

export const getAvailableSizes = async () => {
  const locale = await getLocale();
  const res: any = await handleApiCall(
    GET_AVAIALBLE_SIZES,
    'GET',
    {},
    {
      'Accept-Language': locale,
    }
  );
  return res.data;
};

export const getDefaultProductType = async () => {
  const locale = await getLocale();
  const res: any = await handleApiCall(
    DEFAULT_PRODUCT_TYPE_URL,
    'GET',
    {},
    {
      'Accept-Language': locale,
    }
  );
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

  const locale = await getLocale();
  const res: any = await handleApiCall(
    PRODUCT_LISTING,
    'POST',
    {
      page: parseInt(page.toString()),
      perPage: 10,
      search,
      sortBy,
      sortOrder,
      filter: filterObj,
    },
    {
      'Accept-Language': locale,
    }
  );

  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getGenderList = async () => {
  const locale = await getLocale();
  const res: any = await handleApiCall(GENDER_DROPDOWN_URL, 'POST', null, {
    'Accept-Language': locale,
  });

  const filteredGenderList = res?.data?.map((gender: { value: string; label: string }) => ({
    value: gender?.value,
    label: gender?.label,
  }));

  return filteredGenderList;
};

export const getProductDetails = async (id: string) => {
  const locale = await getLocale();
  const user = await getUserData();
  const res: any = await handleApiCall(
    `${PRODUCT_DETAILS_URL}/${id}`,
    'POST',
    {
      userId: user?._id,
    },
    {
      'Accept-Language': locale,
    }
  );
  if (res.code === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getHomeProductList = async () => {
  const locale = await getLocale();
  const res: any = await handleApiCall(
    PRODUCT_LISTING,
    'POST',
    {
      page: 1,
      perPage: 6,
      filter: {},
    },
    {
      'Accept-Language': locale,
    }
  );
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
      perPage: 4,
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
  const token = await getUserToken();
  const res: any = await handleApiCall(
    ADD_TO_CART_LIST_URL,
    'GET',
    {},
    {
      Authorization: `Bearer ${token}`,
    }
  );

  if (res.code === 200) {
    return res?.data;
  } else {
    return [];
  }
};

export const getMyAddresses = async () => {
  const token = await getUserToken();
  const res: any = await handleApiCall(
    MY_ADDRESS_LIST_URL,
    'POST',
    {},
    {
      Authorization: `Bearer ${token}`,
    }
  );

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
  const token = await getUserToken();
  const res: any = await handleApiCall(
    PROFILE_API_URL,
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
};

export const getWishlistData = async ({ resolvedSearchParams }: { resolvedSearchParams: any }) => {
  const { _page: page = 1 } = resolvedSearchParams;
  const token = await getUserToken();
  const res: any = await handleApiCall(
    WISHLIST_LIST_URL,
    'POST',
    {
      page: parseInt(page.toString()),
      perPage: 10,
      search: '',
    },
    {
      Authorization: `Bearer ${token}`,
    }
  );

  if (res.code === 200) {
    return res?.data;
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
  const token = await getUserToken();
  const res: any = await handleApiCall(
    GET_USER_ORDERS,
    'POST',
    {
      page: parseInt(page.toString()),
      perPage: 10,
    },
    {
      Authorization: `Bearer ${token}`,
    }
  );
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
    return {};
  }
};

export const getMeasurementProfiles = async () => {
  const token = await getUserToken();
  const res: any = await handleApiCall(
    MEASUREMENT_PROFILE_OPTIONS,
    'POST',
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
};

export const getMeasurementProfileById = async (id: string) => {
  const token = await getUserToken();
  const res: any = await handleApiCall(
    `${MEASUREMENT_PROFILE_GET_URL}/${id}`,
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
};

export const getUserMeasurementActive = async () => {
  const token = await getUserToken();
  const res: any = await handleApiCall(
    USER_MEASUREMENT_ACTIVE,
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
};

export const getUserMeasurementBySlug = async () => {
  const token = await getUserToken();
  const res: any = await handleApiCall(
    USER_MEASUREMENT_SLUG_URL,
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
};
