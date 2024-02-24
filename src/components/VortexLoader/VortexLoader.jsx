import {Vortex} from "react-loader-spinner";
import { LoaderPosition } from "./VortexLoader.styled";

const VortexLoader = () => {
    return (
        <LoaderPosition>
            <Vortex
               visible={true}
               height="100"
               width="100"
               ariaLabel="vortex-loading"
               wrapperStyle={{}}
               wrapperClass="vortex-wrapper"
               colors={['blue', 'violet', 'black', 'darksalmon', 'white']}
            />
        </LoaderPosition>
    );
};

export default VortexLoader;
