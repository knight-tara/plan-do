import { RotatingTriangles } from 'react-loader-spinner'

export const Loading = () => {

    return (
        <div>
            <RotatingTriangles
                visible={true}
                height="200"
                width="200"
                colors={["white", "white", "white"]}
                ariaLabel="rotating-triangles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );

};