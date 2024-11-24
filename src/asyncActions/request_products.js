export const load_categories = async (limit) => {
  const baseUrl = `https://picsum.photos/v2/list?page=1&limit=${limit}`;
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
};

