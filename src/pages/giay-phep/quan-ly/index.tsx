import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { checkAccessPermission } from 'src/@core/layouts/checkAccessPermission';
import Error401 from "src/pages/401";
import ManageLicense from "src/views/license/manage";

const Manage = () => {
    const router = useRouter();
    const routePath = router.pathname; // Use router.pathname to get the current pathname

    // Split the pathname and get the part you need (in this case, the first segment)
    const routeSegment = routePath.split('/')[1];

    const [accessView, setAccessView] = useState(false);

    async function getAccess() {
        setAccessView(await checkAccessPermission(routeSegment, 'view'));
    }

    useEffect(() => {
        getAccess()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Use routeSegment in your conditional rendering
    return accessView ? <ManageLicense /> : <Error401 />;
}

export default Manage;
