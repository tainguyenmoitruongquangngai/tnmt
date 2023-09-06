import { useRouter } from 'next/router';
import { shouldShow } from 'src/@core/layouts/components/shouldShow';
import Error401 from "src/pages/401";
import DrillingPracticeGroundWaterLicense from 'src/views/license/drillingpracticeground-water';

const DrillingPracticeGroundWater = () => {
    const router = useRouter();
    const routePath = router.pathname; // Use router.pathname to get the current pathname

    // Split the pathname and get the part you need (in this case, the first segment)
    const routeSegment = routePath.split('/')[1];

    // Use routeSegment in your conditional rendering
    return shouldShow(routeSegment) ? <DrillingPracticeGroundWaterLicense /> : <Error401 />;
}

export default DrillingPracticeGroundWater;
