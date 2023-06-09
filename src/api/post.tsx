import { enqueueSnackbar } from "notistack";
import apiUrl from "./config";

const postData = async (url: string, postData: any) => {
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
        const resData = await response.json();
        if (response.ok) {
            
            // Show success snackbar notification
            enqueueSnackbar(resData?.message, { variant: 'success' });

            return true;
        } else {

            // Show error snackbar notification
            enqueueSnackbar(resData?.message , { variant: 'error' });

            return false;
        }
    } catch (error) {
        console.error('Error:', error);

        return false;
    }
};

export default postData;

