// services/apiservie.js
import userAxiosInstanceWithoutToken from '@/config/userAxiosInstanceWithoutToken'; // Import the axios instance

export const fetchMenuData = async () => {
  try {
    const response = await userAxiosInstanceWithoutToken.get('/admin/home/dropdown'); // Use the Axios instance
    const data = response.data;
    if (data && data.data) {
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching menu data:', error);
    throw error; // Propagate the error to handle it in the component
  }
};
