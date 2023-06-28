import apiUrl from "./config";

const postApiData = async (url: string, postData: any) => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${apiUrl}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(postData),
        });

        if (response.ok) {

            return true;
        } else {
            console.log(response)

            return false;
        }
    } catch (error) {
        console.error('Error:', error);

        return false;
    }
};

export default postApiData;

