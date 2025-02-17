export const fetchMenuData = async () => {
  try {
    const response = await fetch('http://localhost:50111/admin/home/dropdown');
    const data = await response.json();
    if (data && data.data) {
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching menu data:', error);
    throw error; // Propagate the error to handle it in the component
  }
};
